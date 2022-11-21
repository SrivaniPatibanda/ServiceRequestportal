import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceService } from '../Services/login-service.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    let login: LoginServiceService;
    let router:Router;
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
      HttpClientTestingModule,
      RouterModule,
      RouterTestingModule,
      HttpClientModule
      ],
    })
    .compileComponents();
    login=TestBed.inject(LoginServiceService);
    router=TestBed.inject(Router);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be able to login success', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    let data=app.loginUser();
  });
  
});
