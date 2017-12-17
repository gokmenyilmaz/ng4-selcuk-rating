import { Component, OnInit } from '@angular/core';

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
