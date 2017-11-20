import {Product} from '../../../services/product/product';

export class Basket {

  private static _userId: string;
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

  static clearAll() {
    this.clear();
    this._userId = null;
  }

  static getProductIdList(): string[] {
    const productIdList = [];
    for (let i = 0; i < this._itemList.length; i++) {
      productIdList.push(this._itemList[i].product.id);
    }
    return productIdList;
  }

  static getQuantityList(): number[] {
    const quantityIdList = [];
    for (let i = 0; i < this._itemList.length; i++) {
      quantityIdList.push(this._itemList[i].quantity);
    }
    return quantityIdList;
  }

  static get userId(): string {
    return this._userId;
  }

  static set userId(value: string) {
    this._userId = value;
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
