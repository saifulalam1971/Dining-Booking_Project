import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookingDetailsPageComponent } from './app-booking-details-page.component';

describe('AppBookingDetailsPageComponent', () => {
  let component: AppBookingDetailsPageComponent;
  let fixture: ComponentFixture<AppBookingDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBookingDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
