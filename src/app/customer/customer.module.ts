import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { customerroutes } from '../routing/customroutes';
import { CustomerComponent } from './customer.component';
import { LoginServiceService } from '../Services/login-service.service';
//import { DatepickerModule } from 'angular-mat-datepicker';

@NgModule({
  declarations: [
  
    CustomerComponent
  ],
  imports: [
    CommonModule,
  
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerroutes),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }