import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { CommonModule } from '@angular/common';
import { MacFoyComponent,DialogContent } from './mac-foy/mac-foy.component';
import { MacFoyService } from "./macfoy.service";
import {OyuncuListComponent } from '../oyuncular/oyuncu-list/oyuncu-list.component'

import {OyuncularModule} from '../oyuncular/oyuncular.module'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const config = {
  apiKey: "AIzaSyCmxxECnZY5VKWHWl7PfIflQPUexr-6Tjc",
  authDomain: "reytingdb.firebaseapp.com",
  databaseURL: "https://reytingdb.firebaseio.com",
  storageBucket: "reytingdb.appspot.com",
  messagingSenderId: "1019597381393"
};


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OyuncularModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  declarations: [MacFoyComponent,DialogContent],
  exports:[MacFoyComponent],
  entryComponents: [DialogContent],
  providers:[MacFoyService]
})
export class MacfoyModule { }
