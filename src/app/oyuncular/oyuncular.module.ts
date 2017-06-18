import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OyuncularRoutingModule } from './oyuncular-routing.module';
import { OyuncuListComponent } from './oyuncu-list/oyuncu-list.component';

@NgModule({
  imports: [
    CommonModule,
    OyuncularRoutingModule
  ],
  declarations: [OyuncuListComponent],
  exports:[OyuncuListComponent]
})
export class OyuncularModule { }
