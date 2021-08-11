import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './guards/activate.guard';
import { LoadGuard } from './guards/load.guard';
import { Homepage2Component } from './homepage2/homepage2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'homepage2',
    canActivate: [ActivateGuard],
    loadChildren: () =>
      import('./homepage2/homepage2.module').then((m) => m.Homepage2Module),
  },
  {
    path: 'homepage',
    canLoad: [LoadGuard],
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
