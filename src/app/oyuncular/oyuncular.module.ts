import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OyuncuListComponent } from "app/oyuncular/oyuncu-list/oyuncu-list.component";
import { OyuncuEditComponent } from './oyuncu-edit/oyuncu-edit.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OyuncuListComponent, OyuncuEditComponent],
  exports:[OyuncuListComponent,OyuncuEditComponent]
})
export class OyuncularModule { }
