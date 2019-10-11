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

export interface TodoState extends EntityState<TodoModel> {
  pagination: PageEvent;
  selectedTodos: string[];
}
