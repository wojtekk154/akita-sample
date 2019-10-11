import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public filterForm: FormGroup;

  constructor(private todoService: TodoService, private matDialog: MatDialog) {
    this.filterForm = new FormGroup({
      query: new FormControl([''])
    });

  }

  public setPage(page: PageEvent): void {
    this.todoService.setPage(page);
  }

  public toggleSelectionTodo(id: string): void {
    this.todoService.toggleSelection(id);
  }

  public removeSingleTodo(id): void {
    this.todoService.deleteTodo(id);
  }


  public openAddTodoForm(): void {
    const ref = this.matDialog.open(CreateComponent, {
      height: '400px',
      width: '600px',
    });

    ref.afterClosed().subscribe(v => console.log('AFTER CLOSE', v));
  }

  ngOnInit(): void {
    this.todoService.getAllTodos();

  }
}
