import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCheckComponent } from './ligne-check.component';

describe('LigneCheckComponent', () => {
  let component: LigneCheckComponent;
  let fixture: ComponentFixture<LigneCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
