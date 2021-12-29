import {
  Component
} from '@angular/core';
import { SkyModalService } from '@skyux/modals';
import { UserService } from '../services/user.service';
import { AdminModalComponent } from './admin-modal/admin-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  public helpKey: string = 'help-demo.html';
  public modalSize: string = 'medium';
  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    // {
    //   titleKey: 'app_nav_add',
    //   path: '/add-details'
    // },
    {
      titleKey: 'app_nav_test',
      path: '/test'
    }
    // {
    //   titleKey: 'app_nav_edit',
    //   path: '/edit-details'
    // }
  ];

  constructor(
    private modal: SkyModalService, private userService: UserService
  ) { }

  testAdmin(){
    debugger;
    const modalInstanceType: any = AdminModalComponent;
    const options: any = {
      helpKey: this.helpKey,
      size: this.modalSize
    };

    let modalref = this.modal.open(modalInstanceType, options);
    modalref.closed.subscribe((res)=>{
      this.userService.setAdminName(res.data);
    });
  }
}
