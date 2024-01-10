import { TestBed } from '@angular/core/testing';

import { CarDescriptionService } from './car-description.service';

describe('CarDescriptionService', () => {
  let service: CarDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
