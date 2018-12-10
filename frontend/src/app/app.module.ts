import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from './grd-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import {MyServiceService} from "./my-service.service";
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    CustomerComponent,
    LoginComponent,
    MainpageComponent,
    ReserveComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
