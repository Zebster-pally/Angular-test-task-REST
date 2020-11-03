import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductModel } from './product.model';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/products';

  get() {
    return this.http.get(`${this.url}`)
  }

  select(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }

  add(product: ProductModel) {
    return this.http.post(`${this.url}`, product);
  }

  update(product: ProductModel) {
    return this.http.put(`${this.url}/${product.id}`, product);
  }

}
