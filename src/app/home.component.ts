import {
  Component, OnInit
} from '@angular/core';
import { SkyAgGridService } from '@skyux/ag-grid';
import {
  SkyModalService
} from '@skyux/modals';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import {
  EditDetailsComponent
} from './edit-details/edit-details.component';
import { User } from './models/User';
import { UserService } from './services/user.service';

function actionCellRenderer(params:any) {
  let eGui = document.createElement("div");

  //let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  // let isCurrentRowEditing = editingCells.some((cell:any) => {
  //   return cell.rowIndex === params.node.rowIndex;
  // });

//   if (isCurrentRowEditing) {
//     eGui.innerHTML = `
// <button  class="action-button update"  data-action="update"> update  </button>
// <button  class="action-button cancel"  data-action="cancel" > cancel </button>
// `;
//  } else {
    eGui.innerHTML = `
<button class="sky-btn sky-btn-primary"  data-action="edit" > Edit  </button>
<button class="sky-btn sky-btn-primary" style="margin-left:10px" data-action="delete" > Delete </button>
`;
//  }

  return eGui;
}

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public girdData: User[];
  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public gridD: User[];
  public rowSelection: string;
  public helpKey: string = 'help-demo.html';

  public modalSize: string = 'medium';
  public columnDefs = [
    {
      field: 'firstname',
      headerName: 'FirstName'
    },
    {
      field: 'lastname',
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
    },
    {
      field:'action',
      cellRenderer: actionCellRenderer
    },
  ];
  
  constructor(private userService: UserService, private agGridService: SkyAgGridService,  private modal: SkyModalService) {
    this.rowSelection = 'single';
 }


  public ngOnInit() {
    this.userService.getUsers().subscribe(
      (response) => { 
        debugger;
        this.girdData = response;
        this.gridD = this.girdData; },
      (error) => {}      
    );
    //this.gridD = this.girdData;

    // [
    //   { firstname: 'Shikha', lastname: 'Ber', contact: '123', email: 'a@gmail.com', dob: '22-10-1996', address: 'abcd' }
    // ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent),
      //onRowClicked: rowClickedEvent => this.onRowClicked(rowClickedEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
 }

 public onGridReady(gridReadyEvent: GridReadyEvent): void {
  this.gridApi = gridReadyEvent.api;
  this.gridApi.sizeColumnsToFit();
}

editRow(event: any) {
  this.userService.setModalData(event.data);
  event.data;
  const modalInstanceType: any = EditDetailsComponent;
  const options: any = {
    helpKey: this.helpKey,
    size: this.modalSize
    //data:event.data
  };

  const modalref = this.modal.open(modalInstanceType, options);
  modalref.closed.subscribe((result) => {
    if (result) {
      this.userService.updateUser(result.data).subscribe((response) => {
        if(response != null){
          alert('User details updated successfully');
        }
        else{
          alert('Could not update user details');
        }
        this.ngOnInit();
      });
    }
  });
}

onCellClicked(event:any){
  if(event.column.colId === "action"){
    if(event.event.target.dataset.action === "delete"){
      debugger;
      this.userService.deleteUser(event.data.id).subscribe((response)=>{
        if(response!=null){
          event.api.applyTransaction({
            remove: [event.node.data]
          });
        }
      })
    }
    else if(event.event.target.dataset.action === "edit"){
      this.editRow(event);
    }
  }
}

}
