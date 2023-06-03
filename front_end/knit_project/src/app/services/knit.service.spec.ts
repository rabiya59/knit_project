import { TestBed } from '@angular/core/testing';

import { KnitService } from './knit.service';

describe('KnitService', () => {
  let service: KnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
