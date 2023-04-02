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
  transfer(account_no:number){
    const user_id = this.user.deposit()
    this.http.put(`http://localhost:52000/users/${user_id}`,{'amount':this.depositAmount}).subscribe(data => {
      data=data
      console.log(this.data);
      this.snack.open("Deposited","ok");
      this.router.navigate(['thirdparty'])
  });
}
send(transaction: any) {
  // Send transaction.amount to the server
  transaction.showAmount = false; // hide the input field and "Send" button
}

}
