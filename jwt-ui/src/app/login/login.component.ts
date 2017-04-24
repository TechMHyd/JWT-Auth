import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../shared/jwt-service';

@Component({
    moduleId: module.id,
    selector: 'login-auth',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    
    generatedToken:any;
    userInfo={
        userName: '',
        password:''
    }

    constructor(private _jwtService:JwtService, private _router:Router){}

    ngOnInit(){
        let token = localStorage.getItem("jwt");
        if(token != null){
            this._jwtService.validateJwts(token)
                .subscribe(data =>{
                    let isValid = data._body;
                    console.log(isValid);
                    if(isValid === true){
                        this._router.navigate(['welcome']);
                    }else{
                        console.log("invalid token");
                    }
                })
        }else{
            console.log("logged in false");
        }
       
    }

    proceed(){
        console.log(this.userInfo.userName);
        this._jwtService.createJwt(this.userInfo.userName)
        .subscribe(
            data=> {
                this.generatedToken=data._body;
                localStorage.setItem("jwt",this.generatedToken);
                this._router.navigate(['welcome']);
        }
        );
    }
}