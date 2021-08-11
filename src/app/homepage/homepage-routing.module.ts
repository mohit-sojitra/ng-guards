import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from '../guards/deactivate.guard';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canDeactivate: [DeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
