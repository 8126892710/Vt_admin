import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from 'src/app/_service/data-service.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(private router: Router, private dataService: DataService) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
        return this.dataService.getCookies('currentUser').then(user=>{
            if(user){
                var user_type = user['user_type'];
                this.router.navigate([user_type]);
                return false;
            }
            else{
                if(window.location.pathname == '/auth/verification'){
                    this.router.navigate(['/']);
                    return false;                
                }
                return true;
            }
        })
    }
}