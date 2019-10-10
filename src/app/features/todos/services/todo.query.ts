import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoEntity, TodoState } from '../../../core/models/todo.model';
import { TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity <TodoState, TodoEntity> {
  constructor(private todoStore: TodoStore) {
    super(todoStore);
  }
};
