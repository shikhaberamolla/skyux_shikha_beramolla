import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeComponent } from './home.component';
import { AuthGuardService } from './shared/auth-guard/auth-guard.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path:"add-details", component:AddDetailsComponent}, 
    {path:"edit-details", component:EditDetailsComponent} ,
    {path:'test',component:TestComponent, canActivate:[AuthGuardService]},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule] ,
   providers:[AuthGuardService]
}) 
export class AppRoutingModule { }