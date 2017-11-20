import {Component, OnInit} from '@angular/core';
import {Basket, Item} from './basket';
import {Router} from '@angular/router';
import {OrderService} from '../../../services/order/order.service';
import {Order} from '../../../services/order/order';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
  }

  getItemList(): Item[] {
    return Basket.itemList;
  }

  totalPrice(): number {
    return Basket.totalPrice();
  }

  addOrder(): void {
    const order: Order = {
      id: null,
      userId: Basket.userId,
      productId: Basket.getProductIdList(),
      quantity: Basket.getQuantityList(),
      status: 0
    }
    this.orderService.addOrder(order).subscribe(
      _ => this.router.navigate(['market/orders'])
    );
    Basket.clear();
  }
}
