import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';
import { ProductModel } from  '../product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  product: ProductModel = { id: null, name: null, price: null }

  displayedColumns: string[] = ['id', 'name', 'price', 'edit'];
  dataSource = new MatTableDataSource<ProductModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.productService.get().subscribe((data:ProductModel[]) => this.dataSource.data = data);
  }

}
