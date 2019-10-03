export interface UserModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersList {
  data: UserModel[];
  totalPages: number;
  total: number;
  per_page: string;
  page: string;
}

export interface UsersStoreState {
  name: string;
  list: UsersList;
}
