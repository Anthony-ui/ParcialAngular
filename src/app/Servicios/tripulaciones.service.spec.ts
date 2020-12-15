import { TestBed } from '@angular/core/testing';

import { TripulacionesService } from './tripulaciones.service';

describe('TripulacionesService', () => {
  let service: TripulacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripulacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
