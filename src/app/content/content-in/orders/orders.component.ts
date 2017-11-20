import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order/order.service';
import {OrderExt} from '../../../services/order/orderExt';
import {Basket} from '../basket/basket';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private _accessLevel: string;
  private _orders: OrderExt[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this._accessLevel = Cookie.get('accessLevel');
    if (this.isOper()) {
      this.orderService.getOrderListByUserId(Basket.userId).subscribe(
        orders => {
          this._orders = orders;
        }
      );
    } else if (this.isAdmin()) {
      this.orderService.getOrderList().subscribe(
        orders => {
          this._orders = orders;
        }
      );
    }
  }

  isAdmin(): boolean {
    return this._accessLevel === '0';
  }

  isOper(): boolean {
    return this._accessLevel === '1';
  }

  totalPrice(order: OrderExt): number {
    console.log(order);
    let price = 0;
    for (let i = 0; i < order.products.length; i++) {
      price += order.products[i].price * order.quantity[i];
    }
    return price;
  }


  get orders(): OrderExt[] {
    return this._orders;
  }
}
