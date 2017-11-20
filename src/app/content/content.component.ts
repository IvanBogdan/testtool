import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {User} from '../services/user/user';
import {Cookie} from 'ng2-cookies';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private _user: User;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userSubscribe();
    this.redirect();
  }

  get user(): User {
    return this._user;
  }

  userSubscribe() {
    this.userService.getUser().subscribe(
      user => {
        this._user = user;
      }
    );
  }

  redirect() {
    let options = {relativeTo: this.route};
    if (this.router.routerState.snapshot.url.endsWith('market')) {
      switch (Cookie.get('accessLevel')) {
        case '0': {
          this.router.navigate(['orders'], options);
          return;
        }
        case '1': {
          this.router.navigate(['products'], options);
          return;
        }
        default:
          this.router.navigate([''], options);
      }
    }
  }
}
