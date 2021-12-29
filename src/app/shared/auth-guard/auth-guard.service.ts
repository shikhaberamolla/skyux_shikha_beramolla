import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SkyToastService, SkyToastType } from '@skyux/toast';
import { UserService } from '../../services/user.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private userService: UserService, private toastService: SkyToastService ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (!this.userService.isAdmin())  {
            this.openToastFailure('You are not allowed to view this page');
            //redirect to login/home page etc
            //return false to cancel the navigation
            return false;
        } 
        return true;
    }

    public openToastFailure(msg: string): void {
        this.toastService.openMessage(msg, {
          type: SkyToastType.Danger,
          autoClose: true  
        });
      }
 
}
 