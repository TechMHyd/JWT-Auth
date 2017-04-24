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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var JwtService = (function () {
    function JwtService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:38080/jwtauth1/webapi/projectservice/';
    }
    JwtService.prototype.createJwt = function (userName) {
        var _this = this;
        console.log("Serv" + userName);
        return this._http.get(this.baseUrl + 'createJwt/' + userName)
            .map(function (response) {
            _this.generatedToken = response;
            return _this.generatedToken;
        });
    };
    JwtService.prototype.validateJwts = function (token) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.baseUrl + 'validateJwt/' + token)
            .map(function (response) {
            var isValid = response;
            return isValid;
        });
    };
    return JwtService;
}());
JwtService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt-service.js.map