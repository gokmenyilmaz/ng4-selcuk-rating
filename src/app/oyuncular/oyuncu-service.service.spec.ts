import { TestBed, inject } from '@angular/core/testing';

import { OyuncuServiceService } from './oyuncu-service.service';

describe('OyuncuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OyuncuServiceService]
    });
  });

  it('should be created', inject([OyuncuServiceService], (service: OyuncuServiceService) => {
    expect(service).toBeTruthy();
  }));
});
