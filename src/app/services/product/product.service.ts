import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consts } from '../../Consts';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(Consts.PRODUCTS_URL);
  }

  addProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(Consts.PRODUCT_ADD_URL, product, {headers: headers});
  }
  
    // addProduct(name: string, description: string, price: number, quantity: number): Observable<any> {
    //   // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    //   const params = new HttpParams()
    //   .set('name', name)
    //   .set('description', description)
    //   .set('price', price.toString())
    //   .set('quantity', quantity.toString());
    //   return this.http.post(Consts.PRODUCT_ADD_URL, {headers: headers, params: params});
    // }
}
