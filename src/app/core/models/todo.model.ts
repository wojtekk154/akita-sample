import { EntityState } from '@datorama/akita';
import { PageEvent } from '@angular/material';

export enum TaskStatus {
  TODO,
  ACTIVE,
  DONE
}

export interface TodoModel {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  status: TaskStatus;
  createdAt: string | Date;
  userId: string;
}

export interface TodoEntity {
  todos: TodoModel[];
}

export interface TodoState extends EntityState<TodoEntity> {
  pagination: PageEvent;
}
