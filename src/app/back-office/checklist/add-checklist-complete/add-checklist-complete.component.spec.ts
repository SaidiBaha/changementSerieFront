import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChecklistCompleteComponent } from './add-checklist-complete.component';

describe('AddChecklistCompleteComponent', () => {
  let component: AddChecklistCompleteComponent;
  let fixture: ComponentFixture<AddChecklistCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChecklistCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChecklistCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
