import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersMMComponent } from './components/orders-mm/orders-mm.component';
import { OrdersItemMMComponent } from './components/orders-item-mm/orders-item-mm.component';
import { OrdersDetailsMMComponent } from './components/orders-details-mm/orders-details-mm.component';
import {DataService} from "./services/mm-data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersMMComponent,
    OrdersItemMMComponent,
    OrdersDetailsMMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
