import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../../services/product/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(name: string, description: string, price: number, quantity: number) {
    const product: Product = {
      id: null,
      name: name,
      description: description,
      price: price,
      quantity: quantity
    };
    this.productService.addProduct(product).subscribe();
  }
}
