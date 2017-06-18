import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OyuncuListComponent } from "app/oyuncular/oyuncu-list/oyuncu-list.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OyuncuListComponent],
  exports:[OyuncuListComponent]
})
export class OyuncularModule { }
