import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OyuncuListComponent } from "./oyuncular/oyuncu-list/oyuncu-list.component";
import { MacFoyComponent } from "./macfoy/mac-foy/mac-foy.component";

const routes: Routes = [
    {path:":klup/:donem/oyuncular", component:OyuncuListComponent},
    {path:":klup/:donem/macfoy", component:MacFoyComponent},
    {path:":klup/:donem/macfoy/:hafta/:grup", component:MacFoyComponent},
    {path:":klup/:donem", component:MacFoyComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
