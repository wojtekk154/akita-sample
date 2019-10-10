import { EntityState } from '@datorama/akita';
import { PageEvent } from '@angular/material';

export interface UserModel {
  avatar: string;
  createdAt: string | Date;
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  job_title: string;
}


export interface UsersEntityState {
  users: UserModel[];
}

export interface UsersState extends EntityState<UsersEntityState> {
  pagination: PageEvent;
}
