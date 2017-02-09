/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoutesLoaderService } from './routes-loader.service';

describe('RoutesLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesLoaderService]
    });
  });

  it('should ...', inject([RoutesLoaderService], (service: RoutesLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
