import {
  Component
} from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent {

  constructor(private userService:UserService) { }

  onSubmit(myform:any){
      debugger;
      let user:User = {
        firstname: myform.value.fname,
        lastname: myform.value.lname,
        contact: myform.value.contact,
        email: myform.value.email,
        dob: myform.value.dob,
        address: myform.value.addr,
      };
      this.userService.addUser(user);
      let res= this.userService.getUsers();
      console.log(res);
  }
}
