import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
import { AdminModule } from "app/admin/admin.module";
import { AppRoutingModule } from "app/app-routing.module";
import { PuanlarComponent } from './puanlar/puanlar.component';



@NgModule({
  declarations: [
    AppComponent,
    PuanlarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    SharedModule,
    CoreModule,
    AdminModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
