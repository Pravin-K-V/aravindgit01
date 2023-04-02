import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  data:any;
  depositAmount: number = 0;

  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient){}
  ngOnInit():void{
    this.ondeposit();
  }

  ondeposit(){
    this.user.viewtransaction().subscribe((response) => {
      this.data = response;
      console.log(response)});

    // const id = this.user.deposit()

    // this.http.put(`http://localhost:5200/users/${id}`,{'amount':this.depositAmount}).subscribe(data => {
    //   data=data
    //   console.log(this.data)

  // });
  }
}
