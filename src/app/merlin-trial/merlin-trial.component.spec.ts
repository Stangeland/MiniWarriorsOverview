import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerlinTrialComponent } from './merlin-trial.component';

describe('MerlinTrialComponent', () => {
  let component: MerlinTrialComponent;
  let fixture: ComponentFixture<MerlinTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerlinTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
