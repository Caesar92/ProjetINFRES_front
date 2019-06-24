import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoncoinPage } from './boncoin.page';

describe('BoncoinPage', () => {
  let component: BoncoinPage;
  let fixture: ComponentFixture<BoncoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoncoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoncoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
