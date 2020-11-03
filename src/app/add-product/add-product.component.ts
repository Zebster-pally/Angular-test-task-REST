import { Component } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  product: ProductModel = { id: null, name: null, price: null }

  constructor(private productService: ProductService, private router: Router) { }

  add() {
    this.productService.add(this.product).subscribe(() => this.router.navigate(['/']));
  }
}
