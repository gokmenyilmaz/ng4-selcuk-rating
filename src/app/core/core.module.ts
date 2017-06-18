import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  exports:[
    NavComponent
  ],
  declarations: [NavComponent]
})
export class CoreModule { }
