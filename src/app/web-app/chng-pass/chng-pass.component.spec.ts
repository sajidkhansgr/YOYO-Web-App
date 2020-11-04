import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngPassComponent } from './chng-pass.component';

describe('ChngPassComponent', () => {
  let component: ChngPassComponent;
  let fixture: ComponentFixture<ChngPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChngPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
