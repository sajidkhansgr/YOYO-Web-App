import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionInnerComponent } from './collection-inner.component';

describe('CollectionInnerComponent', () => {
  let component: CollectionInnerComponent;
  let fixture: ComponentFixture<CollectionInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
