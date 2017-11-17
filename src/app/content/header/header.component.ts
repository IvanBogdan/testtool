import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.userService.
  }

}
