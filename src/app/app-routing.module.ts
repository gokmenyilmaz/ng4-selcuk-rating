import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuanlarComponent } from './puanlar/puanlar.component';

const routes: Routes = [
{path:"oyuncular", component:PuanlarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
