import { TestBed } from '@angular/core/testing';

import { ListarTurmasService } from './listar-turmas.service';

describe('ListarTurmasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarTurmasService = TestBed.get(ListarTurmasService);
    expect(service).toBeTruthy();
  });
});
