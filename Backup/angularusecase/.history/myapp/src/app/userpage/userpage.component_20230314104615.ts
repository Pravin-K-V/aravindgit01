import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from '../loginservices.service'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  data:any;
  resuser:any;


  constructor(private user:LoginservicesService){}
  ondetails(){}
}
