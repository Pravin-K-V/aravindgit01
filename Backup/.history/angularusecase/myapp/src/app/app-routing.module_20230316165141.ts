import { ThirdpartyComponent } from './thirdparty/thirdparty.component';
import { DepositeComponent } from './deposite/deposite.component';
import { ViewtransactionComponent } from './viewtransaction/viewtransaction.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SummaryComponent } from './summary/summary.component';
import { HomepageComponent } from './homepage/homepage.component';
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
  {component:HomepageComponent,path:''},
  {component:SummaryComponent,path:'summary'},
  {component:TransactionComponent,path:'transaction'},
  {component:ViewtransactionComponent,path:'viewtransaction'},
  {component:DepositeComponent,path:'deposite'},
  {component:ThirdpartyComponent,path:'thirdparty'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
