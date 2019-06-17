import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciaDisciplinaPage } from './frequencia-disciplina.page';

describe('FrequenciaDisciplinaPage', () => {
  let component: FrequenciaDisciplinaPage;
  let fixture: ComponentFixture<FrequenciaDisciplinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequenciaDisciplinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciaDisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
