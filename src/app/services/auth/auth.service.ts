import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Consts} from '../../Consts';
import {Observable} from 'rxjs/Observable';
import {Token} from '../../guards/auth/Token';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient,
              private cookie: CookieService) {
  }

  isLoggedIn() {
    const userParams = new HttpParams().set('token', this.cookie.get('accessToken'));
    return this.httpClient.get<boolean>(Consts.CHECK_LOGIN_URL, {params: userParams});
  }

  login(login: string, password: string): Observable<Token> {
    const loginParams = new HttpParams().set('login', login).set('password', password);
    return this.httpClient.get<Token>(Consts.LOGIN_URL, {params: loginParams, responseType: 'json'});
  }

  logout(): Observable<string> {
    const userParams = new HttpParams().set('token', this.cookie.get('token'));
    return this.httpClient.get(Consts.LOGOUT_URL, {params: userParams, responseType: 'text'});
  }
}
