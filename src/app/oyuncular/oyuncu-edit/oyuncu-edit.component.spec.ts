import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OyuncuEditComponent } from './oyuncu-edit.component';

describe('OyuncuEditComponent', () => {
  let component: OyuncuEditComponent;
  let fixture: ComponentFixture<OyuncuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OyuncuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OyuncuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
