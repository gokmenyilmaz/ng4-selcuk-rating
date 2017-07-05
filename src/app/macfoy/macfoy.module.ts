import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { CommonModule } from '@angular/common';
import { MacFoyComponent,DialogContent } from './mac-foy/mac-foy.component';
import { MacFoyService } from "./macfoy.service";


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  declarations: [MacFoyComponent,DialogContent],
  exports:[MacFoyComponent],
  entryComponents: [DialogContent],
  providers:[MacFoyService]
})
export class MacfoyModule { }
