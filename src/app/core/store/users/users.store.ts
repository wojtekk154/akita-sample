import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { UserModel, UsersState } from '../../models/user.model';
import { initPaginationState } from '../../../shared/constants/init.pagination';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'usersStore' })
export class UsersStore extends EntityStore<UsersState, UserModel> {
  constructor() {
    super(initPaginationState);
  }
}
