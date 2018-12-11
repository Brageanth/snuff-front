import { TestBed, inject } from '@angular/core/testing';

import { ColoreService } from './colore.service';

describe('ColoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColoreService]
    });
  });

  it('should be created', inject([ColoreService], (service: ColoreService) => {
    expect(service).toBeTruthy();
  }));
});
