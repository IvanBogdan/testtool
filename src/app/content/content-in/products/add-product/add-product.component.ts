import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product/product.service';
import {Product} from '../../../../services/product/product';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private _nameControl: FormControl;
  private _priceControl: FormControl;
  private _quantityControl: FormControl;
  private _nameValidationMessage: string;
  private _priceValidationMessage: string;
  private _quantityValidationMessage: string;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this._nameControl = new FormControl('', [Validators.required]);
    this._priceControl = new FormControl('', [Validators.required, Validators.min(0.01)]);
    this._quantityControl = new FormControl('', [Validators.required, Validators.min(1)]);
  }

  addProduct(name: string, description: string, price: number, quantity: number) {
    if (this.validate()) {
      const product: Product = {
        id: null,
        name: name,
        description: description,
        price: price,
        quantity: quantity
      };
      this.productService.addProduct(product).subscribe(
        _ => this.router.navigate(['market/products'])
      );
    }
  }

  validate(): boolean {
    let valid = true;
    this.emptyErrors();
    if (!this._nameControl.valid) {
      valid = false;
      this._nameValidationMessage = 'Введите название';
    }
    if (!this._priceControl.valid) {
      valid = false;
      this._priceValidationMessage = 'Введите цену > 0';
    }
    if (!this._quantityControl.valid) {
      valid = false;
      this._quantityValidationMessage = 'Введите количество на складе > 0';
    }
    return valid;
  }

  emptyErrors(): void {
    this._nameValidationMessage = null;
    this._priceValidationMessage = null;
    this._quantityValidationMessage = null;
  }


  get nameControl(): FormControl {
    return this._nameControl;
  }

  get priceControl(): FormControl {
    return this._priceControl;
  }

  get quantityControl(): FormControl {
    return this._quantityControl;
  }

  get nameValidationMessage(): string {
    return this._nameValidationMessage;
  }

  get priceValidationMessage(): string {
    return this._priceValidationMessage;
  }

  get quantityValidationMessage(): string {
    return this._quantityValidationMessage;
  }
}
