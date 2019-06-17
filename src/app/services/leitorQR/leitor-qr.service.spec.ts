import { TestBed } from '@angular/core/testing';

import { LeitorQRService } from './leitor-qr.service';

describe('LeitorQRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeitorQRService = TestBed.get(LeitorQRService);
    expect(service).toBeTruthy();
  });
});
