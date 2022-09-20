import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiningBookingHomeComponent } from './app-dining-booking-home.component';

describe('AppDiningBookingHomeComponent', () => {
  let component: AppDiningBookingHomeComponent;
  let fixture: ComponentFixture<AppDiningBookingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDiningBookingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDiningBookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
