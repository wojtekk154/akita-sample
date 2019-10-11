import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoStore } from './todo.store';
import { TodoModel } from '../../../core/models/todo.model';
import { initPagination } from '../../../shared/utils/pagination';
import { PageEvent } from '@angular/material';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private httpClient: HttpClient, private todoStore: TodoStore) {
  }

  public getAllTodos(): void {
    this.httpClient.get('/todos').subscribe((todos: TodoModel[]) => {
      this.todoStore.add(todos);
      this.todoStore.update(state => ({
        pagination: initPagination(todos)
      }));
    });
  }

  public setPage(pagination: PageEvent): void {
    this.todoStore.update({ pagination });
  }

  public deleteTodo(id: string): void {
    this.httpClient.delete(`/todos/${id}`).subscribe(v => {
      this.todoStore.remove(v);
    });
  }

  public updateTodo(data: TodoModel): void {
    this.httpClient.put(`/todos/${data.id}`, data).subscribe(v => console.log('update', v));
  }

  public createTodo(data: TodoModel): Observable<TodoModel> {
    return this.httpClient.post('/todos', data).pipe(
      tap((todo: TodoModel) => {
        // this.todoStore.
      })
    );
  }

  public toggleSelection(id: string): void {
    this.todoStore.update(state => {
      const selected = new Set(state.selectedTodos);
      selected.has(id) ? selected.delete(id) : selected.add(id);
      return {
        ...state,
        selectedTodos: Array.from(selected)
      };
    });
  }
}
