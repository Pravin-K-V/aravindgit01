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
  constructor(private route:Router,private http:HttpClient,private auth:LoginservicesService){}
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

    create(){
      this.http.post(this.data.email,this.data.password).subscribe({
      next: data=>{
         return data
      },
      error: error => {
      return 0
}
})

  }
  onSubmit(){
    this.loading=true;
    //call login service
    this.auth.login(this.data.email,this.data.password)
    .subscribe({
        next:data=>{
            //store token
            this.auth.storeToken(data.idToken);
            console.log('logged user token is '+data.idToken);
            this.auth.canAuthenticate();
        },
        error:data=>{
            if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
                this.errormessage = "Invalid Credentials!";
            } else{
                this.errormessage = "Unknown error when logging into this account!";
            }
        }
    }).add(()=>{
        this.loading =false;
        console.log('login process completed!');

    })
  }
  }

