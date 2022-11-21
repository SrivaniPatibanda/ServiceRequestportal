import { Component, OnInit } from '@angular/core';
import { Registerdata } from '../models/registration';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }
  ErrorMessage:any='';
  RegisterDataModel:Registerdata=new Registerdata();
  ngOnInit(): void {
  }


  regUser(){
    this._service.registerUser(this.RegisterDataModel).subscribe(res=>{
     
      localStorage.setItem('token',res.token);
      this._router.navigate(['customer/add']);
    },res=>
    {
      console.log(res);
      this.ErrorMessage="Some error have occured";
      document.getElementById('btnErrorMsg')?.click();
    });
  }

  UpdateDetails(){
debugger;
    this._service.registerUser(this.RegisterDataModel).subscribe(res=>{
     
      localStorage.setItem('token',res.token);
      this._router.navigate(['customer/add']);
    },res=>
    {
      console.log(res);
      this.ErrorMessage="Some error have occured";
      document.getElementById('btnErrorMsg')?.click();
    });

  }

}
