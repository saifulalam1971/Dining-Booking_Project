import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiningBookingDialogComponent } from './app-dining-booking-dialog.component';

describe('AppDiningBookingDialogComponent', () => {
  let component: AppDiningBookingDialogComponent;
  let fixture: ComponentFixture<AppDiningBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDiningBookingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDiningBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
