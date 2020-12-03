import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMailComponent } from './share-mail.component';

describe('ShareMailComponent', () => {
  let component: ShareMailComponent;
  let fixture: ComponentFixture<ShareMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
