import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuanlarComponent } from './puanlar/puanlar.component';
import { OyuncuListComponent } from "./oyuncular/oyuncu-list/oyuncu-list.component";

const routes: Routes = [
    {path:"oyuncular", component:OyuncuListComponent},
    {path:"puanlar", component:PuanlarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
