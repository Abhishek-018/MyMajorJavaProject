import { TestBed } from '@angular/core/testing';

import { UsereventrbookingService } from './usereventrbooking.service';

describe('UsereventrbookingService', () => {
  let service: UsereventrbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsereventrbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
