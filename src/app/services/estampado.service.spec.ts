import { TestBed, inject } from '@angular/core/testing';

import { EstampadoService } from './estampado.service';

describe('EstampadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstampadoService]
    });
  });

  it('should be created', inject([EstampadoService], (service: EstampadoService) => {
    expect(service).toBeTruthy();
  }));
});
