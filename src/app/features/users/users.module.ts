import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../core/material.module';
import { ROUTES } from '../../core/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: ROUTES.users.list,
        component: ListComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  declarations: [UsersComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UsersModule {
}
