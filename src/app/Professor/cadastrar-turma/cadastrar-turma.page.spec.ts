import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTurmaPage } from './cadastrar-turma.page';

describe('CadastrarTurmaPage', () => {
  let component: CadastrarTurmaPage;
  let fixture: ComponentFixture<CadastrarTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
