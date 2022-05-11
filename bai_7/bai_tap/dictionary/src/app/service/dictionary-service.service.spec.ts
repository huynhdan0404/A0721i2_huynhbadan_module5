import { TestBed } from '@angular/core/testing';

import { DictionaryServiceService } from './dictionary-service.service';

describe('DictionaryServiceService', () => {
  let service: DictionaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
