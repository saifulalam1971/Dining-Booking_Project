import { Component, OnInit } from '@angular/core';
import { DiningBookingService } from './../../dining-booking.service';
@Component({
  selector: 'app-booking-details-page',
  templateUrl: './app-booking-details-page.component.html',
  styleUrls: ['./app-booking-details-page.component.scss']
})
export class AppBookingDetailsPageComponent implements OnInit {
  detailsIndex:any;
  customerInfo:any;
  constructor(
    private diningbookingservice: DiningBookingService
  ) { }

  ngOnInit(): void {
    this.detailsIndex=this.diningbookingservice.getDiningDetailsIndex();
    this.customerInfo=  this.diningbookingservice.getLocalStroageCustomerData();
    console.log("show index: ",this.detailsIndex);
    console.log("show data: ",this.customerInfo[this.detailsIndex]);
  }

}
