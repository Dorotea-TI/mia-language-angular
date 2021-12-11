import { TestBed } from '@angular/core/testing';

import { MiaLanguageCoreService } from './mia-language-core.service';

describe('MiaLanguageCoreService', () => {
  let service: MiaLanguageCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaLanguageCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
