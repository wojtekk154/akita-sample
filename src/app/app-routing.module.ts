import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes';
import { NgModule } from '@angular/core';

// @ts-ignore
let routes: Routes;
routes = [
  {
    path: ROUTES.users,
    loadChildren: () => {

      const promise = import('./features/users/users.module').then(m => m.UsersModule);
      return promise;
    }
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
