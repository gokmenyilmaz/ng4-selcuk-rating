import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OyuncularModule } from "app/oyuncular/oyuncular.module";
import { OyuncuListComponent } from "app/oyuncular/oyuncu-list/oyuncu-list.component";

const routes: Routes = [
{path:"oyuncular", component:OyuncuListComponent}

];

@NgModule({
  imports: [OyuncularModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OyuncularRoutingModule { }
