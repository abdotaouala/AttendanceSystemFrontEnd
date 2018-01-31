import { TestBed, inject } from '@angular/core/testing';

import { StatisticAttehdanceSystemService } from './statistic-attehdance-system.service';

describe('StatisticAttehdanceSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatisticAttehdanceSystemService]
    });
  });

  it('should be created', inject([StatisticAttehdanceSystemService], (service: StatisticAttehdanceSystemService) => {
    expect(service).toBeTruthy();
  }));
});
