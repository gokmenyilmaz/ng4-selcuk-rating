import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuanlarComponent } from './puanlar.component';

describe('PuanlarComponent', () => {
  let component: PuanlarComponent;
  let fixture: ComponentFixture<PuanlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuanlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
