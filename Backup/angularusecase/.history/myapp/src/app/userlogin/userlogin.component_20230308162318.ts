import { Router, TitleStrategy } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';
import { HttpClient } from '@angular/common/http';
// import {baseUrl} from '../loginservices.service'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email:string='';
  password:string='';
  hashError: boolean=false;

  constructor(private route:Router,private http:HttpClient,private register:LoginservicesService){}
  onmain(){
    this.route.navigate(['/']);
      }



  loading=false;
  errormessage="";
  submit=false;

//     create(){
//       this.http.post(this.data.email,this.data.password).subscribe({
//       next: data=>{
//          return data
//       },
//       error: error => {
//       return 0
// }
// })
ngOnInit(): void{
this.email='';
this.password='';
}
login(){
  const formData = new FormData()
  formData.append('Email',this.email);
  formData.append('Password',this.password);
  this.register.login(formData).subscribe(res=>{
    if(res == null){
      alert("emailid or password is wrong");
      this.ngOnInit();
    }else{
      console.log("Login successful");
      localStorage.setItem("token",res.accesstoken);
      console.log(res.accesstoken)
      this.register.setAccessToken(res.token);
    }
  },

    err=>{
      this.hashError=true;
      alert("Login failed");
      this.ngOnInit
    }
  )
}
  }
  // onSubmit(){
  //   this.loading=true;
  //   //call login service
  //   this.auth.login(this.data.email,this.data.password)
  //   .subscribe({
  //       next:data=>{
  //           //store token
  //           this.auth.storeToken(data.idToken);
  //           console.log('logged user token is '+data.idToken);
  //           this.auth.canAuthenticate();
  //       },
  //       error:data=>{
  //           if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
  //               this.errormessage = "Invalid Credentials!";
  //           } else{
  //               this.errormessage = "Unknown error when logging into this account!";
  //           }
  //       }
  //   }).add(()=>{
  //       this.loading =false;
  //       console.log('login process completed!');

  //   })
  // }
  // }

