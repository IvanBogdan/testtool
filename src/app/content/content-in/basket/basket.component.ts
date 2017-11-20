import {Component, OnInit} from '@angular/core';
import {Basket, Item} from './basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() {
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
    Basket.clear();
  }
}
