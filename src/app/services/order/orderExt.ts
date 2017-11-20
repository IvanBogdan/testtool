import {Product} from '../product/product';
import {User} from '../user/user';

export class OrderExt {
  id: string;
  user: User;
  products: Product[];
  quantity: number[];
  status: number;

  constructor() {}

  public totalPrice(): number {
    let price = 0;
    for (let i = 0; i < this.products.length; i++) {
      price += this.products[i].price * this.quantity[i];
    }
    return price;
  }
}
