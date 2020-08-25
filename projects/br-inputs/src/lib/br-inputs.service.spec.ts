import { TestBed } from '@angular/core/testing';

import { BRInputsService } from './br-inputs.service';

describe('BRInputsService', () => {
  let service: BRInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BRInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
