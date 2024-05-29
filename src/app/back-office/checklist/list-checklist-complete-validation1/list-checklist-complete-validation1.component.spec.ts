import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChecklistCompleteValidation1Component } from './list-checklist-complete-validation1.component';

describe('ListChecklistCompleteValidation1Component', () => {
  let component: ListChecklistCompleteValidation1Component;
  let fixture: ComponentFixture<ListChecklistCompleteValidation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChecklistCompleteValidation1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChecklistCompleteValidation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
