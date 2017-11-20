import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginControl: FormControl;
  private _passControl: FormControl;
  private _errors: string[];
  private _loginError: string;
  private _passwordError: string;

  constructor(private auth: AuthService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit() {
    this._loginControl = new FormControl('', [Validators.required]);
    this._passControl = new FormControl('', [Validators.required]);

  }

  login() {
    if (this.validateForm()) {
      this.doLogin(this._loginControl.value, this._passControl.value);
    }
  }

  private doLogin(login: string, password: string) {
    this.auth.login(login, password)
      .subscribe(
        token => {
          if (token != null) {
            this.cookie.deleteAll();
            this.cookie.set('accessToken', token.token);
            this.cookie.set('accessLevel', token.accessLevel.toString());
            this.router.navigate(['market']);
          } else {
            this.loginFail();
          }
        },
        error => {
          if (error.status === 404) {
            this.addError('Не найден удалённый сервер');
          } else {
            this.addError('Ошибка подключения к удалённому серверу');
          }
        }
      );
  }

  private validateForm(): boolean {
    let valid = true;
    this.emptyErrors();
    if (!this._loginControl.valid) {
      valid = false;
      this._loginError = 'Введите логин';
    }
    if (!this._passControl.valid) {
      valid = false;
      this._passwordError = 'Введите пароль';
    }
    return valid;
  }


  get loginControl(): FormControl {
    return this._loginControl;
  }

  get passControl(): FormControl {
    return this._passControl;
  }

  get errors(): string[] {
    return this._errors;
  }

  private emptyErrors(): void {
    this._errors = [];
    this._loginError = null;
    this._passwordError = null;
  }

  private loginFail() {
    this.addError('Неверный логин/пароль');
  }

  private addError(error: string) {
    this._errors.push(error);
  }

  get loginError(): string {
    return this._loginError;
  }

  get passwordError(): string {
    return this._passwordError;
  }
}
