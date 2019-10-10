import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../core/services/users.service';
import { UserModel } from '../../../core/models/user.model';
import { PageEvent } from '@angular/material';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter, map } from 'rxjs/operators';
import { UsersQuery } from '../../../core/store/users/users.query';
import { setPagingResults } from '../../../shared/utils/pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users$: Observable<UserModel[]>;
  public pagination$: Observable<PageEvent>;
  public columns = ['avatar', 'first_name', 'last_name', 'job_title', 'createdAt', 'Action'];

  constructor(private usersQuery: UsersQuery, private usersService: UsersService) {
  }

  public setPage(page): void {
    this.usersService.setPage(page);

  }

  ngOnInit() {
    this.initUsersListAndPagination();
  }

  private initUsersListAndPagination(): void {
    this.users$ = combineLatest([
      this.usersQuery.select(entity => entity.entities.users || []),
      this.usersQuery.select(store => store.pagination)
    ]).pipe(
      filter(([users, _]: [UserModel[], PageEvent]) => !!users.length),
      map(setPagingResults)
    );
    this.pagination$ = this.usersQuery.pagination$;
  }
}
