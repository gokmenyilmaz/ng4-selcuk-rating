import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
     MaterialModule
  ],
  exports:[
     FormsModule,RouterModule,[NavComponent]
  ],
  declarations: [NavComponent]
})
export class CoreModule { }
