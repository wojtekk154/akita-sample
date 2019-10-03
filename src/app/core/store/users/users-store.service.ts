import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UsersList, UsersStoreState } from '../../models/user.model';

const initState: UsersStoreState = {
  name: 'usersList',
  list: {
    data: [],
    totalPages: null,
    total: null,
    per_page: null,
    page: null
  }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({...initState})
export class UsersStoreService extends Store<UsersStoreState> {

  constructor() {
    super(initState);
  }
}
