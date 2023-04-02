import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {component:UserloginComponent,path:'login'},
  {component:SignupComponent,path:'signup'},
  {component:UserpageComponent,path:'userpage'},
  {component:DetailsComponent,path:'details'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
