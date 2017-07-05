import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { CommonModule } from '@angular/common';
import { OyuncuListComponent } from "app/oyuncular/oyuncu-list/oyuncu-list.component";
import { OyuncuEditComponent } from './oyuncu-edit/oyuncu-edit.component';
import { OyuncuService } from "./oyuncu-service.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OyuncuListComponent, OyuncuEditComponent],
  exports:[OyuncuListComponent,OyuncuEditComponent],
  providers:[OyuncuService]
})
export class OyuncularModule { }
