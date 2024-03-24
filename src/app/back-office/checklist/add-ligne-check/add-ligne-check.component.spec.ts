import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLigneCheckComponent } from './add-ligne-check.component';

describe('AddLigneCheckComponent', () => {
  let component: AddLigneCheckComponent;
  let fixture: ComponentFixture<AddLigneCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLigneCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLigneCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
