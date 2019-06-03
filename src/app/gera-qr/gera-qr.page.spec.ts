import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraQRPage } from './gera-qr.page';

describe('GeraQRPage', () => {
  let component: GeraQRPage;
  let fixture: ComponentFixture<GeraQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraQRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
