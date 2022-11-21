import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CreateRequest } from './createnewrequestmodel';
import { SearchbyID } from './SearchByID';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']


})
export class CustomerComponent implements OnInit {
  public id:any='';
  fileName= 'ExcelSheet.xlsx';
  tomorrow: any;
  _baseURL = "https://localhost:44385/api/gateway/ServiceRequests";
  updateUrl="https://localhost:44385/api/gateway/ServiceRequests/updaterequestdatabyid";
  Url = "https://localhost:44385/api/gateway/ServiceRequests/searchuserrequests";




  public viewcreaterequestdiv: boolean = false;
  public viewsearchdiv: boolean = true;

  public updateFlag:boolean=false;
  errorMessage: any;
  status: string | undefined;
  constructor(public datepipe: DatePipe, private http: HttpClient) { }
  SearchByIDModel: SearchbyID = new SearchbyID();
  SearchByIDModels: Array<SearchbyID> = new Array<SearchbyID>();

  CreateRequestModel: CreateRequest = new CreateRequest();
  CreateRequestModels: Array<CreateRequest> = new Array<CreateRequest>();

  ngOnInit(): void {
    //this.today = new Date().toJSON().split('T'[0]);
    let currdt=new Date();
    let tmrDate=currdt.setDate(currdt.getDate()+1);
    this.tomorrow = this.datepipe.transform(tmrDate, 'yyyy-MM-dd');
    this.GetDataFromServer();
  }

  Search() {


    this.id = this.CreateRequestModel.Id;
    this.http.post(this.Url+'?id='+this.id,"").subscribe(res => this.PostSuccess(res),res => console.log(res))
    this.CreateRequestModels = new Array<CreateRequest>();
  }
  PostSuccess(input : any){
    console.log("postsuccessdata",input);

  this.CreateRequestModels = input;
  }
  GetDataFromServer(){
    debugger;
   
    this.http.get(this._baseURL).subscribe(res => this.Success(res),res => console.log(res));
  }
Success(input:any){
  console.log("test data",input);
  this.CreateRequestModels = input;
}
  Create() {
    this.viewcreaterequestdiv = true;
    this.viewsearchdiv = false;

  }

  EditGrid(input:any){
    this.updateFlag=true;
    this.CreateRequestModel=input;
      this.viewcreaterequestdiv=true;
      
  }
Reopen(input:any){
  debugger;

  this.updateFlag=true;
  this.CreateRequestModel=input;
  var request = {

    Status: 'In Progress',
    Id: this.CreateRequestModel.Id,
    Description: this.CreateRequestModel.Description,
    Type: this.CreateRequestModel.Type,
    Date:this.CreateRequestModel.Date,

 
  };
  this.http.put(this.updateUrl,request).subscribe(res=>{
    this. GetDataFromServer();
 },
  err=>{
    alert("Request Failed !! ");
    console.log(err);

    this. GetDataFromServer();
  })

}
  update(){
    alert("update");
    this.updateFlag=false;
    console.log("edit id", this.CreateRequestModel);
    this.http.put(this.updateUrl,this.CreateRequestModel).subscribe(res=>{
     
      this.viewcreaterequestdiv=false;
   
    },
    err=>{
      alert("Request Failed !! ");
      console.log(err);
  
    
    })
  }
  DeleteGrid(input:any){
    debugger;
  this.http.delete(this._baseURL+'?id='+input.Id).subscribe(res=>{
  alert("Request Deleted...");
     this.CreateRequestModel=input;
     this.GetDataFromServer();
     
    },
    err=>{
    alert("Request Failed !! ");
       console.log(err);
 })

}
  Submit() {
    this.updateFlag=false;
    this.http.post(this._baseURL,this.CreateRequestModel).subscribe(res=>{
      alert("Request Created...");
      this.CreateRequestModel=new CreateRequest();
      this.viewcreaterequestdiv = false;
      this.viewsearchdiv = true;
      this.GetDataFromServer();
    },
    err=>{
      alert("Request Failed !! ");
      console.log(err);
      this.viewcreaterequestdiv = false;
      this.viewsearchdiv = true;
    })
   
   
    //console.log(this.CreateRequestModel);}
  }


    exportexcel(): void
    {
      debugger;
      /* pass here the table id */
      let element = document.getElementById('excel-table');
      if(element!=null){
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      /* save to file */  
      XLSX.writeFile(wb, this.fileName);
      }
  
    } 

    View(){
      this.viewcreaterequestdiv = false;
      this.viewsearchdiv = true;
      this.GetDataFromServer();
    }
  }

  




