import { TestBed, inject } from '@angular/core/testing';

import { TallaService } from './talla.service';

describe('TallaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TallaService]
    });
  });

  it('should be created', inject([TallaService], (service: TallaService) => {
    expect(service).toBeTruthy();
  }));
});
