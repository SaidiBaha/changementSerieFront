import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosageComponent } from './add-posage.component';

describe('AddPosageComponent', () => {
  let component: AddPosageComponent;
  let fixture: ComponentFixture<AddPosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
