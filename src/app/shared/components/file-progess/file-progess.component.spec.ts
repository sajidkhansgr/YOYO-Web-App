import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileProgessComponent } from './file-progess.component';

describe('FileProgessComponent', () => {
  let component: FileProgessComponent;
  let fixture: ComponentFixture<FileProgessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileProgessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
