import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';
import { HttpClient } from '@angular/common/http';
// import {baseUrl} from '../loginservices.service'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  private baseUrl:string="http://localhost:8000"
  constructor(private route:Router,private http:HttpClient,){}
  onmain(){
    this.route.navigate(['/']);
      }
    data={
     email:"",
     password:""
    }
  loading=false;
  errormessage="";
  submit=false;

    create(data: any){
      this.http.post(this.baseUrl, data).subscribe({
      next: data=>{
         return data
      },
      error: error => {
      return 0
}
})

  }
  }

