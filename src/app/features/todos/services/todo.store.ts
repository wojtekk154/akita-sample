import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { TodoEntity, TodoState } from '../../../core/models/todo.model';
import { initPagination } from '../../../shared/utils/pagination';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<TodoState, TodoEntity> {
  constructor() {
    super(initPagination([]));
  }
}
