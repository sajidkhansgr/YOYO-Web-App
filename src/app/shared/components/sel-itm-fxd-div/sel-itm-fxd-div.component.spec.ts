import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelItmFxdDivComponent } from './sel-itm-fxd-div.component';

describe('SelItmFxdDivComponent', () => {
  let component: SelItmFxdDivComponent;
  let fixture: ComponentFixture<SelItmFxdDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelItmFxdDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelItmFxdDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
