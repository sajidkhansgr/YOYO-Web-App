import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnComponent } from './commn.component';

describe('CommnComponent', () => {
  let component: CommnComponent;
  let fixture: ComponentFixture<CommnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
