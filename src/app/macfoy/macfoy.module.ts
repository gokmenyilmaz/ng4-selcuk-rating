import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacFoyComponent } from './mac-foy/mac-foy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MacFoyComponent],
  exports:[MacFoyComponent]
})
export class MacfoyModule { }
