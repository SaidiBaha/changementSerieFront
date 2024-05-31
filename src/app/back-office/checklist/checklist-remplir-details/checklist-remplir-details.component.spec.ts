import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistRemplirDetailsComponent } from './checklist-remplir-details.component';

describe('ChecklistRemplirDetailsComponent', () => {
  let component: ChecklistRemplirDetailsComponent;
  let fixture: ComponentFixture<ChecklistRemplirDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistRemplirDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistRemplirDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
