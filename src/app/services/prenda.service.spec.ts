import { TestBed, inject } from '@angular/core/testing';

import { PrendaService } from './prenda.service';

describe('PrendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrendaService]
    });
  });

  it('should be created', inject([PrendaService], (service: PrendaService) => {
    expect(service).toBeTruthy();
  }));
});
