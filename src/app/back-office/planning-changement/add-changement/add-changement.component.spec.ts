import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangementComponent } from './add-changement.component';

describe('AddChangementComponent', () => {
  let component: AddChangementComponent;
  let fixture: ComponentFixture<AddChangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
