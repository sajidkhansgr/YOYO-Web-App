import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSlidesComponent } from './auth-slides.component';

describe('AuthSlidesComponent', () => {
  let component: AuthSlidesComponent;
  let fixture: ComponentFixture<AuthSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
