import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { NavComponent } from './nav/nav.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports:[
    NavComponent
  ],
  declarations: [NavComponent]
})
export class CoreModule { }
