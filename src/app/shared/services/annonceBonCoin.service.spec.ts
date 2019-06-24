import { TestBed } from '@angular/core/testing';

import { AnnonceBonCoinService } from './annonceBonCoin.service';

describe('AnnonceBonCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceBonCoinService = TestBed.get(AnnonceBonCoinService);
    expect(service).toBeTruthy();
  });
});
