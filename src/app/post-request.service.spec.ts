import { TestBed, inject } from '@angular/core/testing';

import { PostRequestService } from './post-request.service';

describe('PostRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostRequestService]
    });
  });

  it('should be created', inject([PostRequestService], (service: PostRequestService) => {
    expect(service).toBeTruthy();
  }));
});
