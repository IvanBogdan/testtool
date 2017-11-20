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
import {AccessLevelPipe} from './pipes/access-level.pipe';
import {ContentInComponent} from './content/content-in/content-in.component';
import {ProfileComponent} from './content/content-in/profile/profile.component';
import {ProductsComponent} from './content/content-in/products/products.component';
import {ProductService} from './services/product/product.service';
import {ProductComponent} from './content/content-in/products/product/product.component';
import {BasketComponent} from './content/content-in/basket/basket.component';
import {OrdersComponent} from './content/content-in/orders/orders.component';
import {OrderComponent} from './content/content-in/orders/order/order.component';
import {AddProductComponent} from './content/content-in/products/add-product/add-product.component';
import {AllComponent} from './content/content-in/products/all/all.component';
import {OrderService} from './services/order/order.service';


const productsRoutes = [
  {path: '', component: AllComponent},
  {path: 'product', component: ProductComponent},
  {path: 'addproduct', component: AddProductComponent}
];
const ttRoutes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'products', component: ProductsComponent, children: productsRoutes},
  {path: 'busket', component: BasketComponent},
  {path: 'orders', component: OrdersComponent}
];
const routes = [
  {path: '', component: LoginComponent},
  {
    path: 'market',
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: ttRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    SideBarComponent,
    HeaderComponent,
    AccessLevelPipe,
    ContentInComponent,
    ProfileComponent,
    ProductsComponent,
    ProductComponent,
    BasketComponent,
    OrdersComponent,
    OrderComponent,
    AddProductComponent,
    AllComponent
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
    ProductService,
    OrderService,
    AuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
