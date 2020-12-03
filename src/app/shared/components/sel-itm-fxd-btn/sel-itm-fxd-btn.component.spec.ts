import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelItmFxdBtnComponent } from './sel-itm-fxd-btn.component';

describe('SelItmFxdBtnComponent', () => {
  let component: SelItmFxdBtnComponent;
  let fixture: ComponentFixture<SelItmFxdBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelItmFxdBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelItmFxdBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
