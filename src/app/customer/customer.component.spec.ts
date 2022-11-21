import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    let datepipe:DatePipe;
    let http:HttpClient;
    await TestBed.configureTestingModule({
      declarations: [ CustomerComponent ],
      imports: [
        CommonModule,
      HttpClientTestingModule,
      RouterModule,
      RouterTestingModule,
      HttpClientModule
      ],
      providers:[DatePipe],
    })
    .compileComponents();
    datepipe=TestBed.inject(DatePipe);
    http=TestBed.inject(HttpClient);

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have init function', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.ngOnInit();
  });
  it('should have search', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.Search();
    expect(data).toEqual();
  });
  it('should have Re-open when request is in completed status', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.Reopen(Input);
    expect(data).toEqual();
  });
  it('should be able to update', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.update();
    expect(data).toEqual();
  });
  it('should have success', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.Success(Input);
  });
  it('should be able to view', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.View();
  });
  it('should be able to export grid in an excel sheet', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.exportexcel();
  });
  it('should be able to submit', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.Submit();
  });
  it('should be able to Delete a request', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.DeleteGrid(Input);
  });
  it('should be able to edit request', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.EditGrid(Input);
  });
  it('should be able to create new request', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.Create();
  });
  it('should be able to get data', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.GetDataFromServer();
  });
  it('should have API Success response', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    let data=app.PostSuccess(Input);
  });
 
});
