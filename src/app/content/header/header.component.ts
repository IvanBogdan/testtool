import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user';
import {UserService} from '../../services/user/user.service';
import {CookieService} from 'ng2-cookies';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService,
              private auth: AuthService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.auth.logout().subscribe(
      _ => {
        this.cookie.delete('token');
        this.cookie.delete('accessLevel');
        this.router.navigate(['/']);
      }
    );
  }
}
