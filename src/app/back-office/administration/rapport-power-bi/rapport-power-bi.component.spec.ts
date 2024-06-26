import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPowerBiComponent } from './rapport-power-bi.component';

describe('RapportPowerBiComponent', () => {
  let component: RapportPowerBiComponent;
  let fixture: ComponentFixture<RapportPowerBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPowerBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportPowerBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
