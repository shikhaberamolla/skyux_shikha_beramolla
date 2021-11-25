import {
  Component, OnInit 
} from '@angular/core';
import { SkyAgGridService } from '@skyux/ag-grid';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  gridData:User[] =[
    {firstname:'Shikha',lastname:'Ber',contact:'123',email:'a@gmail.com',dob:'22-10-1996',address:'abcd'}
  ]
  public columnDefs = [
    {
      field: 'fname',
      headerName: 'FirstName'
    },
    {
      field: 'lname',
      headerName: 'LastName'
    },  {
      field: 'contact',
      headerName: 'Contact'
    },
    {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'dob',
      headerName: 'DOB'
    },
    {
      field: 'address',
      headerName: 'Address'
    }
  ]
  constructor(private userService:UserService,private agGridService: SkyAgGridService) {
    // Called first time before the ngOnInit()
 }

  userList:User[];
  ngOnInit() {
    this.userList = this.userService.getUsers();
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
 }

 public onGridReady(gridReadyEvent: GridReadyEvent): void {
  this.gridApi = gridReadyEvent.api;

  this.gridApi.sizeColumnsToFit();
}
}
