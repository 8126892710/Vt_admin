import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from 'src/app/_service/data-service.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private dataService: DataService
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.dataService.getCookies('currentUser').then(user=>{
            if(user){
                var user_type = user['user_type'];
                var navigateUrl = route.url[0].path;
                if(navigateUrl != user_type){
                    this.router.navigate([user_type]);
                }
                return true;
            }
            // not logged in so redirect to login page
            this.router.navigate(['auth/login']);
            return false;
        })
    }
}