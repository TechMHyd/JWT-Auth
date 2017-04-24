import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,ActivatedRoute,Router } from '@angular/router';
import { JwtService } from './jwt-service'

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private _jwtService:JwtService, private _router:Router, private _activatedRoute:ActivatedRoute){}

    canActivate(route:ActivatedRouteSnapshot){
       let redirectFlag=false;
       let isValid;
       let token = localStorage.getItem("jwt");
        if(token === null){
            redirectFlag=false;
            alert("Please login to continue!");
            this._router.navigate(['login']);
        }else{
            redirectFlag=true;
        }
        return redirectFlag;
    }
}