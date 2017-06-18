import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
 
  ],
  declarations: [],
  exports:[
    MaterialModule,
    CommonModule,
    FormsModule

  ]
})
export class SharedModule { }
