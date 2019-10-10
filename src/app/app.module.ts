import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AdminModule } from "./admin/admin.module";


import { AppRoutingModule } from "./app-routing.module";
import { OyuncularModule } from "./oyuncular/oyuncular.module";
import { MacfoyModule } from "./macfoy/macfoy.module";
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
  

    SharedModule,
   
    AdminModule,
    OyuncularModule,
    MacfoyModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
