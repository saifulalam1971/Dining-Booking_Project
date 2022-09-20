import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiningBookingService {
  customerDiningBookingData:any;
  indexForEdit:any;
  indexforDiningDetails:any;

  constructor() { }
  
  setCustomerBookingData(data:any){
    this.customerDiningBookingData=data;
    console.log("service data: ",data.Occasion_Date);
  }
  getCustomerBookingData(){
    return this.customerDiningBookingData;
  }
  setLocalStroageCustomerData(data:any){
    localStorage.setItem("customerdata", JSON.stringify(data));
  }
  getLocalStroageCustomerData(){
    return JSON.parse(localStorage.getItem('customerdata') || '[]');
  }
  setEditIndex(index:any){
    this.indexForEdit=index;
  }
  getEditIndex(){
    return this.indexForEdit;
  }
  setDiningDetailsIndex(index:any){
    this.indexforDiningDetails=index;
  }
  getDiningDetailsIndex(){
    return this.indexforDiningDetails;
  }
}
