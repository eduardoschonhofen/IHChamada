import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginPage } from './login.page';

describe('ListPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let loginPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    loginPage = fixture.nativeElement;
    const items = loginPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
