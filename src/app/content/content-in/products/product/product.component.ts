import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../services/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product') private _product: Product;

  constructor() {
  }

  ngOnInit() {
  }

  get product(): Product {
    return this._product;
  }
}
