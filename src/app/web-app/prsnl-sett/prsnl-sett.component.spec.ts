import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrsnlSettComponent } from './prsnl-sett.component';

describe('PrsnlSettComponent', () => {
  let component: PrsnlSettComponent;
  let fixture: ComponentFixture<PrsnlSettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrsnlSettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrsnlSettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
