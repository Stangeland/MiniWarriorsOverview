import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rally2Component } from './rally2.component';

describe('Rally2Component', () => {
  let component: Rally2Component;
  let fixture: ComponentFixture<Rally2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rally2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rally2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
