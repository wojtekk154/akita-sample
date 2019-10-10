import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { CreateComponent } from './todos/create/create.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  declarations: [TodosComponent, TodosListComponent, CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodosModule {
}
