import { TestBed } from '@angular/core/testing';

import { CadastroDisciplinaService } from './cadastro-disciplina.service';

describe('CadastroDisciplinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroDisciplinaService = TestBed.get(CadastroDisciplinaService);
    expect(service).toBeTruthy();
  });
});
