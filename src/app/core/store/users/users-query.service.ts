import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UsersStoreState } from '../../models/user.model';
import { UsersStoreService } from './users-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsersQueryService extends Query<UsersStoreState> {
  constructor(private usersStore: UsersStoreService) {
    super(usersStore);
  }
}
