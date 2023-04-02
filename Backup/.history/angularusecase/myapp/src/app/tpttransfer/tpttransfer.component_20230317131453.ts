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
  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient){}
  ngOnInit():void{
    this.onsuggest();
  }

  onsuggest(){
    this.user.viewthirdparty().subscribe((response) => {
      this.data = response;
      console.log(response)});
  }
  transfer(account_no:number){

  }
}
