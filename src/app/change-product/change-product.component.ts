import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.scss']
})
export class ChangeProductComponent implements OnInit {

  product: ProductModel = { id: null, name: null, price: null }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productService.select(id).subscribe((data:ProductModel) => this.product = data);
  }

  change() {
    this.productService.update(this.product).subscribe(() => this.router.navigate(['/']));
  }

}
