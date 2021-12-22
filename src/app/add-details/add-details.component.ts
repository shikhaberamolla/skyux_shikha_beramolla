import { DatePipe } from '@angular/common';
import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent {

  constructor(private userService: UserService, private router:Router, public datepipe: DatePipe) { }

  public onSubmit(myform: any) {
      let user: User = {
        id: null,
        firstname: myform.value.fname,
        lastname: myform.value.lname,
        contact: myform.value.contact,
        email: myform.value.email,
        dob: this.datepipe.transform(myform.value.dob, 'dd-MM-yyyy'),
        address: myform.value.addr
      };
      this.userService.addUser(user).subscribe((response)=>{
        if(response!=null){
          alert('User added successfully');
        }
        else{
          alert('Could not add user');
        }
      });
      this.router.navigate(['/']);
  }
}
