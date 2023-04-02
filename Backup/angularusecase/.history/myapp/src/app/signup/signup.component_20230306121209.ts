import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SignupservicesService } from '../signupservices.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // providers:[SignupservicesService]
})
export class SignupComponent {
  private register:SignupservicesService;
  private snack:MatSnackBar;
  private route:Router;
  private http:HttpClient;
  onmain(){
    this.route.navigate(['/']);
      }
    data={
    name:"",
    email:"",
    password:"",
    phone:""
  }
  constructor(){
    this.register=inject(SignupservicesService);
    this.snack=inject(MatSnackBar);
    this.route=inject(Router);
    this.http=inject(HttpClient);
  }
  getform(data:any){
    this.data.name=data.username;
    this.data.email=data.email;
    this.data.password=data.password;
    this.data.phone=data.phone
      }

  onregister(){
    console.log(this.data);
    if(this.data.name==''|| this.data.email==''||this.data.password==''||this.data.phone=='')
    {
    this.snack.open("fields can not be empty","ok");
    return
    }
    this.register.signuppage(this.data).subscribe(
      response=>{
        console.log(response);
        this.snack.open("Registered Successfull","ok")
        this.route.navigate(['Login'])
      },
      error=>{
        console.log(error);
        if(error!=null){
          this.snack.open("Email already exists","ok")
        }
      }

    );

    }
  // increament(){

  // }


}
