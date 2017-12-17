import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {} from '@angular/material/card';

import { MatFormFieldModule,MatCardModule,MatInputModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
 
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule

  ]
})
export class SharedModule { }
