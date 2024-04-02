import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementDetailsComponent } from './changement-details.component';

describe('ChangementDetailsComponent', () => {
  let component: ChangementDetailsComponent;
  let fixture: ComponentFixture<ChangementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
