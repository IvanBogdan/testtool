import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../services/user/user';
import {CookieService} from 'ng2-cookies';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('user') private _user: User;

  constructor(private auth: AuthService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit() {
  }

  get user(): User {
    return this._user;
  }

  logout() {
    this.auth.logout().subscribe(
      _ => {
        this.cookie.deleteAll();
        this.router.navigate(['/']);
      }
    );
  }
}
