import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacFoyComponent } from './mac-foy.component';

describe('MacFoyComponent', () => {
  let component: MacFoyComponent;
  let fixture: ComponentFixture<MacFoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacFoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacFoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
