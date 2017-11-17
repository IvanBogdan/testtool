import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Consts} from '../../Consts';
import {CookieService} from 'ng2-cookies';
import {User} from './user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private cookie: CookieService) { }

  getUser(): Observable<User> {
    return this.http.get<User>(Consts.USER_BY_TOKEN_URL + '/' + this.cookie.get('token'));
  }
}
