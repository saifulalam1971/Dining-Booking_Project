import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiningBookingService } from './../../dining-booking.service';

@Component({
  selector: 'app-dining-booking-dialog',
  templateUrl: './app-dining-booking-dialog.component.html',
  styleUrls: ['./app-dining-booking-dialog.component.scss']
})
export class AppDiningBookingDialogComponent implements OnInit {
  dinigTime=['3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:30 PM','7:30 PM','8:30 PM','9:30 PM','10:30 PM'];
  editIndex:any;
  customer_form!: FormGroup;
  customerData:any;
  // customer_form=new FormGroup({
  //   customerDiningSpace:new FormControl(''),
  //   Name: new FormControl(''),
  //   Email: new FormControl(''),
  //   Phone: new FormControl(''),
  //   Occasion: new FormControl(''),
  //   Occasion_Date: new FormControl(''),
  //   Occasion_Time: new FormControl('')
  // })
  constructor(
    private diningbookingservice: DiningBookingService
  ) { }

  ngOnInit(): void {
    this.editIndex=this.diningbookingservice.getEditIndex();
    this.customerData=this.diningbookingservice.getLocalStroageCustomerData();
    // this.customer_form.get('Name').setValue(this.customerData[this.editIndex].Name);
    this.customer_form=new FormGroup({
      customerDiningSpace:new FormControl(this.customerData[this.editIndex]?.customerDiningSpace),
      Name: new FormControl(this.customerData[this.editIndex]?.Name),
      Email: new FormControl(this.customerData[this.editIndex]?.Email),
      Phone: new FormControl(this.customerData[this.editIndex]?.Phone),
      Occasion: new FormControl(this.customerData[this.editIndex]?.Occasion),
      Occasion_Date: new FormControl(this.customerData[this.editIndex]?.Occasion_Date),
      Occasion_Time: new FormControl(this.customerData[this.editIndex]?.Occasion_Time)
    })
    
  }
  saveCustomerData(){
    this.diningbookingservice.setCustomerBookingData(this.customer_form.value);
    console.log("form data",this.customer_form.value);
  }
  selecTwoPerson(){
    this.customer_form=new FormGroup({
      customerDiningSpace:new FormControl('2'),
      Name: new FormControl(),
      Email: new FormControl(),
      Phone: new FormControl(),
      Occasion: new FormControl(),
      Occasion_Date: new FormControl(),
      Occasion_Time: new FormControl()
    })
  }
  selecFourPerson(){
    this.customer_form=new FormGroup({
      customerDiningSpace:new FormControl('4'),
      Name: new FormControl(),
      Email: new FormControl(),
      Phone: new FormControl(),
      Occasion: new FormControl(),
      Occasion_Date: new FormControl(),
      Occasion_Time: new FormControl()
    })
  }
  selecCustomPerson(){
    this.customer_form=new FormGroup({
      customerDiningSpace:new FormControl(''),
      Name: new FormControl(),
      Email: new FormControl(),
      Phone: new FormControl(),
      Occasion: new FormControl(),
      Occasion_Date: new FormControl(),
      Occasion_Time: new FormControl()
    })
  }

}
