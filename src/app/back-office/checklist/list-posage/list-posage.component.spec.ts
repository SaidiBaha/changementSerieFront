import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPosageComponent } from './list-posage.component';

describe('ListPosageComponent', () => {
  let component: ListPosageComponent;
  let fixture: ComponentFixture<ListPosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPosageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
