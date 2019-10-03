import { Injectable } from '@angular/core';
import { UsersStoreService } from '../store/users';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private usersStore: UsersStoreService, private httpClient: HttpClient) {
  }

  public getUsersData(page: number): void {
    const params = {
      page
    } as any;
    this.httpClient.get('https://reqres.in/api/users', { params }).subscribe(v => {
      this.usersStore.update(v)
    });
  }
}
