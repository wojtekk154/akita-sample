import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../core/constants/routes';
import { MaterialModule } from '../../core/material.module';

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
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule {
}
