import { Component } from '@angular/core';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akita-sample-proj';

  constructor(private userService: UsersService) {
    userService.getUsersData();
  }
}
