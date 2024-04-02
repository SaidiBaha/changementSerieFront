import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementinfoComponent } from './changementinfo.component';

describe('ChangementinfoComponent', () => {
  let component: ChangementinfoComponent;
  let fixture: ComponentFixture<ChangementinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangementinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
