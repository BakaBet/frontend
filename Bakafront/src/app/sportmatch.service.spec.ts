import { TestBed } from '@angular/core/testing';

import { SportmatchService } from './sportmatch.service';

describe('SportmatchService', () => {
  let service: SportmatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportmatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
