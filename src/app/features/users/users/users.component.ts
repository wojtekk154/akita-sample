import { Component, OnInit } from '@angular/core';
import { UsersQueryService } from '../../../core/store/users/users-query.service';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersQuery: UsersQueryService, private usersService: UsersService) {
  }

  ngOnInit() {
    console.log(this.usersQuery);
    this.usersService.getUsersData(1);
  }

}
