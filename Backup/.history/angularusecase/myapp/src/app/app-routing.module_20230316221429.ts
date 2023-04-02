import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {component:UserloginComponent,path:'login'},
  {component:SignupComponent,path:'signup'},
  {component:UserpageComponent,path:'userpage',canActivate:[AuthGuard]},
  {component:DetailsComponent,path:'details',canActivate:[AuthGuard]},
  {component:HomepageComponent,path:''},
  {component:SummaryComponent,path:'summary',canActivate:[AuthGuard]},
  {component:TransactionComponent,path:'transaction',canActivate:[AuthGuard]},
  {component:ViewtransactionComponent,path:'viewtransaction',canActivate:[AuthGuard]},
  {component:DepositeComponent,path:'deposite',canActivate:[AuthGuard]},
  {component:ThirdpartyComponent,path:'thirdparty',canActivate:[AuthGuard]},
  {component:AddComponent,path:'add',canActivate:[AuthGuard]},
  {component:UpdateComponent,path:'update',canActivate:[AuthGuard]},
  {component:DeleteComponent,path:'delete',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
