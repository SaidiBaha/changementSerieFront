import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChecklistCompleteValidation2Component } from './add-checklist-complete-validation2.component';

describe('AddChecklistCompleteValidation2Component', () => {
  let component: AddChecklistCompleteValidation2Component;
  let fixture: ComponentFixture<AddChecklistCompleteValidation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChecklistCompleteValidation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChecklistCompleteValidation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
