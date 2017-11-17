import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ng2-cookies';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit() {
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
