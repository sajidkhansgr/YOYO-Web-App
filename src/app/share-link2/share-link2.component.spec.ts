import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLink2Component } from './share-link2.component';

describe('ShareLink2Component', () => {
  let component: ShareLink2Component;
  let fixture: ComponentFixture<ShareLink2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareLink2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
