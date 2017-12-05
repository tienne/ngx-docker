import { TestBed, inject } from '@angular/core/testing';

import { SwaggerService } from './containers.service';

describe('SwaggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwaggerService]
    });
  });

  it('should be created', inject([SwaggerService], (service: SwaggerService) => {
    expect(service).toBeTruthy();
  }));
});
