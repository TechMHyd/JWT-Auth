import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JwtService } from './shared/jwt-service';
import { AuthGuardService } from './shared/auth-route-guard.service'

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
    {path:'', redirectTo: 'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'welcome', component:WelcomeComponent, canActivate:[AuthGuardService]},
    {path:'**', redirectTo: 'listview', pathMatch:'full'}
  ]) ],
  declarations: [ AppComponent,LoginComponent,WelcomeComponent ],
  bootstrap: [ AppComponent ],
  providers:[ JwtService,AuthGuardService ]
})
export class AppModule { }
