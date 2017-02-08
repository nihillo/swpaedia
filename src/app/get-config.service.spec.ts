/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetConfigService } from './get-config.service';

describe('GetConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetConfigService]
    });
  });

  it('should ...', inject([GetConfigService], (service: GetConfigService) => {
    expect(service).toBeTruthy();
  }));
});
