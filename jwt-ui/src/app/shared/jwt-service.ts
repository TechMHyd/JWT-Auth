import { Injectable } from '@angular/core';
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class JwtService {

   baseUrl= 'http://localhost:38080/jwtauth1/webapi/projectservice/';
    generatedToken:any;

    constructor(private _http:Http) { }

    createJwt(userName:String):Observable<any>{
        console.log("Serv"+userName);
        return this._http.get(this.baseUrl+'createJwt/'+userName)
                .map((response:Response) =>{
                    this.generatedToken = response;
                    return this.generatedToken; 
                });
    }

    validateJwts(token:any):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.baseUrl+'validateJwt/'+token)
                .map((response:Response) =>{
                    let isValid = response;
                    return isValid;
                })
    }
}