import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OyuncuListComponent } from './oyuncu-list.component';

describe('OyuncuListComponent', () => {
  let component: OyuncuListComponent;
  let fixture: ComponentFixture<OyuncuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OyuncuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OyuncuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
