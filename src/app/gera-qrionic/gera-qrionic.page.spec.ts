import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraQRionicPage } from './gera-qrionic.page';

describe('GeraQRionicPage', () => {
  let component: GeraQRionicPage;
  let fixture: ComponentFixture<GeraQRionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraQRionicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraQRionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
