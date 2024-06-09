import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChangementSerieComponent } from './chart-changement-serie.component';

describe('ChartChangementSerieComponent', () => {
  let component: ChartChangementSerieComponent;
  let fixture: ComponentFixture<ChartChangementSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartChangementSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartChangementSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
