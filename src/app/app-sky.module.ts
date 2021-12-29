import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  APP_INITIALIZER,
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
import { SkyToastModule } from '@skyux/toast';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AppInitService } from './services/app-init.service';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';
import { AdminModalComponent } from './shared/admin-modal/admin-modal.component';
import { API_URL } from './shared/toekns';
export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

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
    SkyInputBoxModule,
    SkyToastModule
  ],
  entryComponents: [
    EditDetailsComponent,
    AdminModalComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
    AppInitService,
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [AppInitService], multi: true},
    { provide:API_URL, useValue: 'http://localhost:3000/'}
  ]
})
export class AppSkyModule { }
