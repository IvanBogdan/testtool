import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../services/product/product';
import {Cookie} from 'ng2-cookies';
import {Basket} from '../../basket/basket';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private _accessLevel: string;
  private _quantityControl: FormControl;

  @Input('product') private _product: Product;

  constructor() {
  }

  ngOnInit() {
    this._accessLevel = Cookie.get('accessLevel');
    this._quantityControl = new FormControl(this.getInitQuantity(), [Validators.required]);
    this._quantityControl.valueChanges.subscribe(value => this.onQuantityChange(value));
  }

  onQuantityChange(value): void {
    if (value > this._product.quantity) {
      this._quantityControl.setValue(this._product.quantity);
      return;
    }
    if (value > 0) {
      return;
    }
    this._quantityControl.setValue(0, {emitEvent: false});
  }

  getInitQuantity(): number {
    for (let i = 0; i < Basket.itemList.length; i++) {
      if (Basket.itemList[i].product.id === this._product.id) {
        return Basket.itemList[i].quantity;
      }
    }
    return 0;
  }

  isOper(): boolean {
    return this._accessLevel === '1';
  }

  addToBasket(quantity: number) {
    Basket.addItem(this._product, quantity);
  }

  get product(): Product {
    return this._product;
  }

  get quantityControl(): FormControl {
    return this._quantityControl;
  }
}
