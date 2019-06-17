import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTurmasPage } from './listar-turmas.page';

describe('ListarTurmasPage', () => {
  let component: ListarTurmasPage;
  let fixture: ComponentFixture<ListarTurmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTurmasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
