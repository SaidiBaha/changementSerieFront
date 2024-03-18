import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandechangementComponent } from './demandechangement.component';

describe('DemandechangementComponent', () => {
  let component: DemandechangementComponent;
  let fixture: ComponentFixture<DemandechangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandechangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandechangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
