import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  data:any;
  constructor(private user:LoginservicesService,private router:Router){}
  ngOnInit():void{
    this.onsubmit();
  }
  onsubmit(){
  this.user.summaryview().subscribe((response) => {
    this.data = response;
    console.log(response)});

}
}
