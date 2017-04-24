"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jwt_service_1 = require("../shared/jwt-service");
var LoginComponent = (function () {
    function LoginComponent(_jwtService, _router) {
        this._jwtService = _jwtService;
        this._router = _router;
        this.userInfo = {
            userName: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem("jwt");
        if (token != null) {
            this._jwtService.validateJwts(token)
                .subscribe(function (data) {
                var isValid = data._body;
                console.log(isValid);
                if (isValid === true) {
                    _this._router.navigate(['welcome']);
                }
                else {
                    console.log("invalid token");
                }
            });
        }
        else {
            console.log("logged in false");
        }
    };
    LoginComponent.prototype.proceed = function () {
        var _this = this;
        console.log(this.userInfo.userName);
        this._jwtService.createJwt(this.userInfo.userName)
            .subscribe(function (data) {
            _this.generatedToken = data._body;
            localStorage.setItem("jwt", _this.generatedToken);
            _this._router.navigate(['welcome']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-auth',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [jwt_service_1.JwtService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map