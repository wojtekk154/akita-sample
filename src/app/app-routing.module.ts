import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes';
import { NgModule } from '@angular/core';

// @ts-ignore
let routes: Routes;
routes = [
  {
    path: ROUTES.home.path,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: ROUTES.users.path,
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: ROUTES.articles.path,
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: ROUTES.todos.path,
    loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
