import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homepage2RoutingModule } from './homepage2-routing.module';
import { Homepage2Component } from './homepage2.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [
    Homepage2Component,
    ProductViewComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [CommonModule, Homepage2RoutingModule],
})
export class Homepage2Module {}
