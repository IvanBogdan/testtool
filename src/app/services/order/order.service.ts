import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Order} from './order';
import {Consts} from '../../Consts';
import {OrderExt} from './orderExt';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrderList(): Observable<OrderExt[]> {
    return this.http.get<OrderExt[]>(Consts.ORDERS_URL);
  }

  getOrderListByUserId(userId: string): Observable<OrderExt[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<OrderExt[]>(Consts.ORDERS_BY_USER_ID_URL, {params: params, responseType: 'json'});
  }

  addOrder(order: Order): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(Consts.ORDER_ADD_URL, order, {headers: headers, responseType: 'text'});
  }
}
