import { TestBed } from '@angular/core/testing';

import { RestInterfaceService } from './rest-interface.service';

describe('RestInterfaceService', () => {
  let service: RestInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
