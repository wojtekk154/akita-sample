import { Injectable } from '@angular/core';
import { UsersStore } from '../store/users';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { PageEvent } from '@angular/material';
import { initPagination } from '../../shared/utils/pagination';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private usersStore: UsersStore, private httpClient: HttpClient) {
  }

  public getUsersData(): void {
    this.httpClient.get('/users').subscribe((users: UserModel[]) => {
      this.usersStore.update(state => {
        return {
          ...state,
          entities: { users },
          pagination: initPagination(users)
        };
      });
    });
  }

  public setPage(page: PageEvent): void {
    this.usersStore.update(state => ({
      ...state,
      pagination: page
    }));
  }
}
