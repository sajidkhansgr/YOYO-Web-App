import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWorkspaceComponent } from './content-workspace.component';

describe('ContentWorkspaceComponent', () => {
  let component: ContentWorkspaceComponent;
  let fixture: ComponentFixture<ContentWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
