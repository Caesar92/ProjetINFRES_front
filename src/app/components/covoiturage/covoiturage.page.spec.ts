import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovoituragePage } from './covoiturage.page';

describe('CovoituragePage', () => {
  let component: CovoituragePage;
  let fixture: ComponentFixture<CovoituragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovoituragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovoituragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
