import { DatePipe } from '@angular/common';
import {
  NgModule
} from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import {
  AppSkyModule
} from './app-sky.module';


@NgModule({
  imports: [AgGridModule.withComponents([]),
            AppRoutingModule ],
  exports: [
    AppSkyModule,
    AgGridModule
  ],
  providers:[DatePipe]
})
export class AppExtrasModule { }
