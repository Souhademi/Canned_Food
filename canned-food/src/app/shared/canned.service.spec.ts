import { TestBed } from '@angular/core/testing';

import { CannedService } from './canned.service';

describe('CannedServiceService', () => {
  let service: CannedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CannedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
