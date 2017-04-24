import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'welcome-auth',
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent {
    constructor(private _router:Router) { }
    ngVar = true;

    logout(){
        localStorage.removeItem("jwt"); 
        this._router.navigate(['login']);
    }
}