import { TestBed } from '@angular/core/testing';

import { MMDataService } from './mm-data.service';

describe('MMDataService', () => {
  let service: MMDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MMDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
