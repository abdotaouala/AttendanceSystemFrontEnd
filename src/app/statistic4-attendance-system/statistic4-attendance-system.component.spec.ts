import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistic4AttendanceSystemComponent } from './statistic4-attendance-system.component';

describe('Statistic4AttendanceSystemComponent', () => {
  let component: Statistic4AttendanceSystemComponent;
  let fixture: ComponentFixture<Statistic4AttendanceSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statistic4AttendanceSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statistic4AttendanceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
