import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanearCodigoAlunoPage } from './scanear-codigo-aluno.page';

describe('ScanearCodigoAlunoPage', () => {
  let component: ScanearCodigoAlunoPage;
  let fixture: ComponentFixture<ScanearCodigoAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanearCodigoAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanearCodigoAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
