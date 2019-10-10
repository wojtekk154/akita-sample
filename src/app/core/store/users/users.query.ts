import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UsersEntityState, UsersState } from '../../models/user.model';
import { UsersStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState, UsersEntityState> {
  public pagination$ = this.select(state => state.pagination);

  constructor(private usersStore: UsersStore) {
    super(usersStore);
  }
}
