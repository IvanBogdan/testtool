import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../../services/user/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _user: User = {
    id: null,
    login: null,
    name: null,
    pwHash: null,
    accessLevel: null
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this._user.id = params['id'];
        this._user.login = params['login'];
        this._user.name = params['name'];
        this._user.pwHash = params['pwHash'];
        this._user.accessLevel = params['accessLevel'];
      }
    );
  }

  get user(): User {
    return this._user;
  }
}
