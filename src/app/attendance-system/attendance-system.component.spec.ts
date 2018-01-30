import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSystemComponent } from './attendance-system.component';

describe('AttendanceSystemComponent', () => {
  let component: AttendanceSystemComponent;
  let fixture: ComponentFixture<AttendanceSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
