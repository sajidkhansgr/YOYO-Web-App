import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpInnerComponent } from './exp-inner.component';

describe('ExpInnerComponent', () => {
  let component: ExpInnerComponent;
  let fixture: ComponentFixture<ExpInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
