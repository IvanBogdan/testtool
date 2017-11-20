import {Product} from '../../../services/product/product';

export class Basket {

  private static _itemList: Item[] = [];


  static addItem(product: Product, quantity: number) {

    if (quantity < 1) {
      return;
    }

    if (quantity > product.quantity) {
      quantity = product.quantity;
    }

    for (let i = 0; i < this._itemList.length; i++) {
      if (this._itemList[i].product.id === product.id) {
        this._itemList[i].quantity = quantity;
        return;
      }
    }
    this._itemList.push(new Item(product, quantity));
  }

  static get itemList(): Item[] {
    return this._itemList;
  }

  static totalPrice(): number {
    let price = 0;
    for (const item of this._itemList) {
      price += item.totalPrice();
    }
    return price;
  }

  static clear() {
    this._itemList = [];
  }
}

export class Item {

  private _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }


  totalPrice(): number {
    return this._product.price * this._quantity;
  }


  get product(): Product {
    return this._product;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}
