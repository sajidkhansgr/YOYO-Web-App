import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRsrcComponent } from './add-rsrc.component';

describe('AddRsrcComponent', () => {
  let component: AddRsrcComponent;
  let fixture: ComponentFixture<AddRsrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRsrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
