import {
  NgModule
} from '@angular/core';
import { SkyAgGridModule } from '@skyux/ag-grid';
import {
  SkyAvatarModule
} from '@skyux/avatar';
import {
  SkyIdModule
} from '@skyux/core';
import {
  SkyDatepickerModule
} from '@skyux/datetime';
import {
  SkyInputBoxModule
} from '@skyux/forms';
import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';
import {
  SkyFluidGridModule
} from '@skyux/layout';
import {
  SkyModalModule
} from '@skyux/modals';
import {
  SkyNavbarModule
} from '@skyux/navbar';
import { SkyAppLinkModule } from '@skyux/router';
import { EditDetailsComponent } from './edit-details/edit-details.component';




@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyAppLinkModule,
    SkyAgGridModule,
    SkyDatepickerModule,
    SkyModalModule,
    SkyIdModule,
    SkyInputBoxModule
  ],
  entryComponents: [
    EditDetailsComponent
  ]
})
export class AppSkyModule { }
