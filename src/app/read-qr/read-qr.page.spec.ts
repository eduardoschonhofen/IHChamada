import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQRPage } from './read-qr.page';

describe('ReadQRPage', () => {
  let component: ReadQRPage;
  let fixture: ComponentFixture<ReadQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
