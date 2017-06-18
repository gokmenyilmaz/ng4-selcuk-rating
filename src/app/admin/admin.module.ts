import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YonetimComponent } from './yonetim/yonetim.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YonetimComponent],
  exports:[YonetimComponent]
})
export class AdminModule { }
