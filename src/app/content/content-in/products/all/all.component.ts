import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../../services/product/product';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  private _productList: Product[];
  private _accessLevel: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this._accessLevel = Cookie.get('accessLevel');
    this.productService.getProductList().subscribe(
      productList => this._productList = productList
    )
  }

  get productList(): Product[] {
    return this._productList;
  }

  isAdmin(): boolean {
    return this._accessLevel === '0';
  }
}
