import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoStore } from './todo.store';
import { TodoModel } from '../../../core/models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private httpClient: HttpClient, private todoStore: TodoStore) {
  }

  public getAllTodos() {
    this.httpClient.get('/todos').subscribe((todos: TodoModel[]) => {
      console.log(todos);
    });
  }
}
