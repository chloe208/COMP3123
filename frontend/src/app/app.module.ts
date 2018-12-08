import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

import {MyServiceService} from "./my-service.service";
import { MainPageComponent } from './main-page/main-page.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    CustomerComponent,
    LoginComponent,
    MainPageComponent,
    MainpageComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
