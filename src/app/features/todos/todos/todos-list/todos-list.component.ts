import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoQuery } from '../../services/todo.query';
import { combineLatest, Observable } from 'rxjs';
import { TaskStatus, TodoModel } from '../../../../core/models/todo.model';
import { PageEvent } from '@angular/material';
import { filter, map } from 'rxjs/operators';
import { setPagingResults } from '../../../../shared/utils/pagination';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Output() paging = new EventEmitter<PageEvent>();
  @Output() toggleSelectionTodo = new EventEmitter<string>();
  @Output() removeTodo = new EventEmitter<string>();

  public columns = ['check', 'title', 'description', 'status', 'createdAt', 'userId', 'Action'];
  public status = TaskStatus;

  public pagination$: Observable<PageEvent> = this.todoQuery.select(state => state.pagination);
  public todos$: Observable<TodoModel[]> = combineLatest([
    this.todoQuery.selectAll(),
    this.todoQuery.select(state => state.pagination)
  ]).pipe(
    filter(([todos, paging]) => !!todos.length && !!paging),
    map(setPagingResults)
  );

  constructor(private todoQuery: TodoQuery) {
  }

  public onRemoveTodo(id: string): void {
    this.removeTodo.emit(id);
  }
  public setCurrentPage(page: PageEvent): void {
    this.paging.emit(page);
  }

  public toggleSelection(id: string): void {
    this.toggleSelectionTodo.emit(id);
  }

  public isChecked(id): Observable<boolean> {
    return this.todoQuery.select(state => state.selectedTodos).pipe(
      map((todos: string[]) => todos.some(v => v === id)),
    );
  }

  ngOnInit(): void {
  }
}
