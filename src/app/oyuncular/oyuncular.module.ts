import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { CommonModule } from '@angular/common';
import { OyuncuListComponent } from "app/oyuncular/oyuncu-list/oyuncu-list.component";
import { OyuncuService } from "./oyuncu-service.service";


@NgModule({
  imports: [
    CommonModule,SharedModule 
  ],
  declarations: [OyuncuListComponent],
  exports:[OyuncuListComponent],
  providers:[OyuncuService]
})
export class OyuncularModule { }
