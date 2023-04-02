import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  submit=false;
  data={
    sender_account_number:"",
    receiver_account_number:"",
    amount:""
  }
  // sender_account_number=this.login.senderid;


  constructor(private http:HttpClient,private login:LoginservicesService){}
  onsubmit(){
    const sender_account_number = Number(this.login.decodedToken.id);
    console.log(sender_account_number);
    const receiver_account_number = Number(this.data.receiver_account_number);
    const amount = Number(this.data.amount);

      this.login.transaction(sender_account_number,amount,receiver_account_number).subscribe(res=>{
         console.log(res);
      },err=>{
        console.log(err)
      }
      );

  }
}