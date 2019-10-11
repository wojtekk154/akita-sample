import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from '../../../../core/models/todo.model';
import { UsersQuery } from '../../../../core/store/users/users.query';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../core/models/user.model';
import { TodoService } from '../../services/todo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public todoForm: FormGroup;
  public statuses = TaskStatus;

  public users$: Observable<UserModel[]> = this.usersQury.selectAll();

  constructor(private fb: FormBuilder,
              private usersQury: UsersQuery,
              private todoService: TodoService,
              public dialogRef: MatDialogRef<CreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.todoForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      userId: [null],
      isActive: [false],
      status: [TaskStatus.TODO, [Validators.required]]
    });
  }

  public addTodo(todo): void {
    this.todoService.createTodo(todo).subscribe(v => {
      if (v.id) {
        this.dialogRef.close();
      }
    });
  }

  public removeTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }

  public onNoClick(): void {

  }

  ngOnInit(): void {
  }

}
