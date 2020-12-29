import { TestBed } from '@angular/core/testing';

import { ElementLibService } from './element-lib.service';

describe('ElementLibService', () => {
  let service: ElementLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
