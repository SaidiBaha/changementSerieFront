import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosageDetailsComponent } from './posage-details.component';

describe('PosageDetailsComponent', () => {
  let component: PosageDetailsComponent;
  let fixture: ComponentFixture<PosageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
