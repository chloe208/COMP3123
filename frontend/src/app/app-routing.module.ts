import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { CustomerComponent } from './customer/customer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'video',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: MainpageComponent
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
    path: 'reserve',
    component: ReserveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
