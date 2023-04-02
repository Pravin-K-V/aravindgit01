import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignupservicesService } from '../signupservices.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignupservicesService]
})
export class SignupComponent {
  onmain(){
    this.route.navigate(['/']);
      }
    data={
    name:"",
    email:"",
    password:"",
    phone:"",
    branch:"",
    data_of_birth:"",
    resident:""
  }
  loading=false;
  errormessage="";
  submit=false;
  constructor(private register:SignupservicesService,private snack:MatSnackBar,private route:Router,private http:HttpClient){}
  // getform(data:any){
  //   this.data.name=data.username;
  //   this.data.email=data.email;
  //   this.data.password=data.password;
  //   this.data.phone=data.phone
  //     }

  // onregister(){
  //   console.log(this.data);
  //   if(this.data.name==''|| this.data.email==''||this.data.password==''||this.data.phone=='')
  //   {
  //   this.snack.open("fields can not be empty","ok");
  //   return
  //   }
  //   this.register.signuppage(this.data.name,this.data.email,this.data.password,this.data.phone).subscribe(
  //     response=>{
  //       console.log(response);
  //       this.snack.open("Registered Successfull","ok")
  //       this.route.navigate(['Login'])
  //     },
  //     error=>{
  //       console.log(error);
  //       if(error!=null){
  //         this.snack.open("Email already exists","ok")
  //       }
  //     }

  //   );

  //   }
  // // increament(){

  // // }
onsubmit(){
  this.loading=true;
  this.register.signuppage(this.data.name,this.data.email,this.data.password,this.data.phone,this.data.branch,this.data.data_of_birth,this.data.resident).subscribe(
    {
      next:data=>{

      },
      error:data=>{
        if(data.error.error.message="INVALID_EMAIL"){
this.errormessage="Invalid email"
        }else if(data.error.error.message=="EMAIL_EXISTS") {
          this.errormessage="Email already exists"
        }else{
          this.errormessage="Unknow error occured while registration"
        }




      }
    }
  ).add(()=>{
    this.loading=false;
    console.log('Registration Successfull ');
  })
}

}
