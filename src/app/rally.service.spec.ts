import { TestBed } from '@angular/core/testing';

import { RallyService } from './rally.service';

describe('RallyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RallyService = TestBed.get(RallyService);
    expect(service).toBeTruthy();
  });
});
