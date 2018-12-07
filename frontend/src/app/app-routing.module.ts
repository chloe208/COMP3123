import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'video',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: VideoComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
