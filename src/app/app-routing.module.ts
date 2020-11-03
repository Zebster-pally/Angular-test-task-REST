import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ChangeProductComponent } from './change-product/change-product.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: TableComponent, },
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: ChangeProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
