import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDiningBookingHomeComponent } from './components/app-dining-booking-home/app-dining-booking-home.component';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { AppDiningBookingDialogComponent } from './components/app-dining-booking-dialog/app-dining-booking-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppBookingDetailsPageComponent } from './components/app-booking-details-page/app-booking-details-page.component';
// import { MatTimepickerModule } from 'mat-timepicker';
@NgModule({
  declarations: [
    AppComponent,
    AppDiningBookingHomeComponent,
    AppDiningBookingDialogComponent,
    AppBookingDetailsPageComponent
  ],
  imports: [
    //MatTimepickerModule,
    MatInputModule,
    MatFormFieldModule ,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
