import { TestBed } from '@angular/core/testing';

import { ShareDetailsCallService } from './share-details-call.service';

describe('ShareDetailsCallService', () => {
  let service: ShareDetailsCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDetailsCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
