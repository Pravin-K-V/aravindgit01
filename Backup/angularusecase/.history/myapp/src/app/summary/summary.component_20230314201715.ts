import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  data:any;
  depositAmount: number = 0;
  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient){}
  ngOnInit():void{
    this.onsubmit();
  }
  onsubmit(){
  this.user.summaryview().subscribe((response) => {
    this.data = response;
    console.log(response)});
  }
  // ondeposit(event: any) {
  //   event.preventDefault();

  //   const accountId = this.route.snapshot.paramMap.get('id');
  //   this.http.put(`http://localhost:8000/users/${accountId}/add_balance`, { amount: this.depositAmount }).subscribe(data => {
  //     this.data = data;
  //   });
  // }

  ondeposit(){
    const account_id = this.user.deposit()
    console.log(account_id)
    this.http.put(`http://localhost:8000/users/${account_id}`,{amount:this.depositAmount}).subscribe(data => {
      this.data = data;

  });
  }

}

