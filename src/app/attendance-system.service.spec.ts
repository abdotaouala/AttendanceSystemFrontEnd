import { TestBed, inject } from '@angular/core/testing';

import { AttendanceSystemService } from './attendance-system.service';

describe('AttendanceSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendanceSystemService]
    });
  });

  it('should be created', inject([AttendanceSystemService], (service: AttendanceSystemService) => {
    expect(service).toBeTruthy();
  }));
});
