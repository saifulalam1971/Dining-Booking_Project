import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from './../../dining-booking.modal';
import { AppBookingDetailsPageComponent } from '../app-booking-details-page/app-booking-details-page.component';
import { AppDiningBookingDialogComponent } from '../app-dining-booking-dialog/app-dining-booking-dialog.component';
import { DiningBookingService } from './../../dining-booking.service';
@Component({
  selector: 'app-dining-booking-home',
  templateUrl: './app-dining-booking-home.component.html',
  styleUrls: ['./app-dining-booking-home.component.scss']
})
export class AppDiningBookingHomeComponent implements OnInit {
  CustomerDetails : Customer []=[];
  customerData:any;
  customerEditData:any;
  constructor(public dialog: MatDialog,
    private diningbookingservice: DiningBookingService
    ) { }
  ngOnInit(): void {
    this.CustomerDetails= this.diningbookingservice.getLocalStroageCustomerData();
  }
  diningBookingModalOpen(){
    const dialogRef = this.dialog.open(AppDiningBookingDialogComponent);
    this.diningbookingservice.setEditIndex('');
    //this.diningbookingservice.setEditIndex('');
    dialogRef.afterClosed().subscribe(() => {
      if(this.customerData!==this.diningbookingservice.getCustomerBookingData() && this.customerEditData!==this.diningbookingservice.getCustomerBookingData()){
      this.customerData=this.diningbookingservice.getCustomerBookingData();
      this.CustomerDetails.push(this.customerData);
      console.log("customerDetails :",this.CustomerDetails);
      this.diningbookingservice.setLocalStroageCustomerData(this.CustomerDetails);
      this.diningbookingservice.setCustomerBookingData('');
      }
    });
  }
  bookingDetails(index:any){
    const dialogRef = this.dialog.open(AppBookingDetailsPageComponent);
    this.diningbookingservice.setDiningDetailsIndex(index);
  }
  deleteCustomer(index:any){
    console.log("index: ",index);
    delete this.CustomerDetails[index];
    console.log("customerDetails after delete :",this.CustomerDetails);
    this.diningbookingservice.setLocalStroageCustomerData(this.CustomerDetails);
  }
  editBookingDetails(index:any){
    const dialogRef = this.dialog.open(AppDiningBookingDialogComponent);
    this.diningbookingservice.setEditIndex(index);
    dialogRef.afterClosed().subscribe(() => {
      if(this.diningbookingservice.getCustomerBookingData())
      this.CustomerDetails[index]=this.diningbookingservice.getCustomerBookingData();
      this. customerEditData=this.CustomerDetails[index];
      this.diningbookingservice.setCustomerBookingData('');
    });
  }

}
