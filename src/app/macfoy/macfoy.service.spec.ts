import { TestBed, inject } from '@angular/core/testing';

import { MacfoyService } from './macfoy.service';

describe('MacfoyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacfoyService]
    });
  });

  it('should be created', inject([MacfoyService], (service: MacfoyService) => {
    expect(service).toBeTruthy();
  }));
});
