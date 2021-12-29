import {
  Component, Input
} from '@angular/core';
import {
  SkyModalInstance
} from '@skyux/modals';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent {

  @Input() data: any;
  user:User;
  constructor(public instance: SkyModalInstance, private userService:UserService){}

  ngOnInit(){
    this.user = JSON.parse(this.userService.getModalData());
    //console.log(data);
  }

  public onSubmit(form:any){
    let user:User = {
      id: this.user.id,
      firstname: form.value.fname,
      lastname: form.value.lname,
      contact: form.value.contact,
      email: form.value.email,
      dob: form.value.dob,
      address: form.value.addr
    };
    //this.userService.setModalData(user);
    this.instance.close(user);
  }
}
