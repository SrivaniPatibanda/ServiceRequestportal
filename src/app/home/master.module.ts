import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MasterComponent } from '../master/master.component';
import { Mainroutes } from '../routing/mainroutes';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
// import { LoginComponent } from '../login/login.component';
// import { MasterComponent } from '../master/master.component';
// import { Mainroutes } from '../routing/mainroutes';
 import { AuthgaurdService } from '../Services/authgaurd.service';
import { LoginServiceService } from '../Services/login-service.service';
import { RegisterComponent } from '../register/register.component';
// import { LoginServiceService } from '../services/login-service.service';
// import { TokenInterceptorService } from '../services/tokenInceptorservice';
// import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    MasterComponent,
   
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule
  ],
  providers: [AuthgaurdService,LoginServiceService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
