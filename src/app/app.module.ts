import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from 'clarity-angular';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';

import {UserService} from './services/user/user.service';
import {AuthService} from './services/auth/auth.service';
import {CookieService} from 'ng2-cookies';

import {AuthGuard} from './guards/auth/auth.guard';
import {SideBarComponent} from './content/side-bar/side-bar.component';
import {HeaderComponent} from './content/header/header.component';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'tt', component: ContentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
