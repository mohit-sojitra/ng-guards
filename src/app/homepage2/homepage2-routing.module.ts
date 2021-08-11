import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from '../guards/activate-child.guard';

import { Homepage2Component } from './homepage2.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    component: Homepage2Component,
    canActivateChild : [ActivateChildGuard],
    children: [
      { path: 'view/:id', component: ProductViewComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: 'add', component: ProductAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homepage2RoutingModule {}
