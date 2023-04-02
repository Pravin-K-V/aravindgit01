import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-tpttransfer',
  templateUrl: './tpttransfer.component.html',
  styleUrls: ['./tpttransfer.component.css']
})
export class TpttransferComponent {
  data:any;
  resuser:any;
  depositAmount: number = 0;
  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient,private snack:MatSnackBar){}
  ngOnInit():void{
    this.onsuggest();
  }

  onsuggest(){
    this.user.viewthirdparty().subscribe((response) => {
      this.data = response;
      console.log(response)});
  }

  // transfer(account_no: number) {
  //   // Store the selected account number in a variable

  //   this.user.setThirdPartyAccountNo(account_no);
  // }

  // send(transaction: any) {
  //   // Send transaction.amount to the server
  //   const account_no = transaction.account_no;
  //   const user_id = this.user.deposit();
  //   this.http.put(`http://localhost:52000/users/${user_id}`, { 'amount': transaction.amount }).subscribe(data => {
  //     console.log(data);
  //     this.snack.open("Deposited", "ok");
  //     this.router.navigate(['thirdparty']);
  //   });
  //   // Hide the input field and "Send" button
  //   transaction.showAmount = false;
  //   // Reset the deposit amount to 0
  //   transaction.amount = 0;
  // }
  transfer(account_no:number){

}
send(transaction: any) {

  const adder_id = this.user.deposit()
  const account_no=transaction.account_no
  console.log(transaction.amount);
    this.http.put(`http://localhost:52000/thirdparty/transaction/${adder_id}/${account_no}`,{'amount':transaction.amount}).subscribe(data => {
      data=data
      console.log(this.data);
      this.snack.open("Deposited","ok");
      this.router.navigate(['thirdparty'])
  });
}

}
