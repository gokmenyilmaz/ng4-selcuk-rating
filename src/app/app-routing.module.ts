import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OyuncuListComponent } from "./oyuncular/oyuncu-list/oyuncu-list.component";
import { OyuncuEditComponent } from "./oyuncular/oyuncu-edit/oyuncu-edit.component";
import { MacFoyComponent } from "./macfoy/mac-foy/mac-foy.component";

const routes: Routes = [
    {path:":klup/:yil/oyuncular", component:OyuncuListComponent},
    {path:"edit", component:OyuncuEditComponent},
    {path:":klup/:yil/macfoy/:hafta/:grup", component:MacFoyComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
