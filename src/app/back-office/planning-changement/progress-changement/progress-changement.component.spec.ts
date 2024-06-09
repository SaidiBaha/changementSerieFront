import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChangementComponent } from './progress-changement.component';

describe('ProgressChangementComponent', () => {
  let component: ProgressChangementComponent;
  let fixture: ComponentFixture<ProgressChangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressChangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
