import { Component, OnInit } from '@angular/core';
import { MdSpinner } from '@angular/material';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['z'] },
      { caption: 'Characters', link: [''] },
      { caption: 'Vehicles', link: [''] },
      { caption: 'Admin', link: [''] },
      { caption: 'Login', link: [''] },
    ];
  }

  constructor()
 {
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
  
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/