import { TestBed } from '@angular/core/testing';

import { DummyUiLibService } from './dummy-ui-lib.service';

describe('DummyUiLibService', () => {
  let service: DummyUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
