import { TestBed, inject } from '@angular/core/testing';

import { TokenInyectorService } from './token-inyector.service';

describe('TokenInyectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInyectorService]
    });
  });

  it('should be created', inject([TokenInyectorService], (service: TokenInyectorService) => {
    expect(service).toBeTruthy();
  }));
});
