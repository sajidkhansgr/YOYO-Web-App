import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCollComponent } from './add-to-coll.component';

describe('AddToCollComponent', () => {
  let component: AddToCollComponent;
  let fixture: ComponentFixture<AddToCollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
