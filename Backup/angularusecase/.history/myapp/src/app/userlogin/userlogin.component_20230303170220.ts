import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private route:Router){}
  onmain(){
    this.route.navigate(['/']);
      }
}
