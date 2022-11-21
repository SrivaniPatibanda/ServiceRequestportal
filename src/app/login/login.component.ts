import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/userdata';
import { LoginServiceService } from '../Services/login-service.service';
import { MasterModule } from '../home/master.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }
  ErrorMessage:any='';
  UserDataModel:UserData=new UserData();
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUser(this.UserDataModel).subscribe(res=>{
     
      localStorage.setItem('token',res.token);
      this._router.navigate(['customer/add']);
    },res=>
    {
      console.log(res);
      this.ErrorMessage="Invalid Username / Password. Please re-check";
      document.getElementById('btnErrorMsg')?.click();
    });
  }

}
