import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCecklistCompleteComponent } from './list-cecklist-complete.component';

describe('ListCecklistCompleteComponent', () => {
  let component: ListCecklistCompleteComponent;
  let fixture: ComponentFixture<ListCecklistCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCecklistCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCecklistCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
