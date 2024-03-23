import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGgComponent } from './modal-gg.component';

describe('ModalGgComponent', () => {
  let component: ModalGgComponent;
  let fixture: ComponentFixture<ModalGgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
