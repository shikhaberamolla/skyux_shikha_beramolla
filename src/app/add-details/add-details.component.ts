import {
  Component
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent {

  constructor(private userService: UserService) { }

  public onSubmit(myform: any) {

      let user: User = {
        firstname: myform.value.fname,
        lastname: myform.value.lname,
        contact: myform.value.contact,
        email: myform.value.email,
        dob: myform.value.dob,
        address: myform.value.addr
      };
      this.userService.addUser(user);
      alert('Details added successfully');
      this.reset(myform);
  }
  public reset(myform: NgForm) {
    myform.resetForm();
  }
}
