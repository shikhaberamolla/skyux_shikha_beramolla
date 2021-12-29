import {
  Component
} from '@angular/core';
import { SkyModalInstance } from '@skyux/modals';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent {

  public adminName:string;
  constructor(
    public instance: SkyModalInstance
  ) { }
}
