import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTurmaPage } from './ver-turma.page';

describe('VerTurmaPage', () => {
  let component: VerTurmaPage;
  let fixture: ComponentFixture<VerTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
