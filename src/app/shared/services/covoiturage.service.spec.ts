import { TestBed } from '@angular/core/testing';

import { CovoiturageService } from './covoiturage.service';

describe('CovoiturageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovoiturageService = TestBed.get(CovoiturageService);
    expect(service).toBeTruthy();
  });
});
