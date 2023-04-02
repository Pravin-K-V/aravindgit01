import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, TitleStrategy } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  logindata={
    email:"",
    password:""
  }
  loading=false;
  errormessage="";
  submit=false;
  passwordFieldType='password';
  constructor(private login:LoginservicesService,private snack:MatSnackBar,private router:Router){}
  ngOnInit(){
    this.login.getTokenExpiration$().subscribe((expired)=>{
      if(expired){
        this.snack.open('Session Expired','Ok')
        this.router.navigate(['loginpage'])
      }
    });
  }
  togglepasswordVisibility():void{
    this.passwordFieldType=this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  doSubmitForm(){
    console.log(this.logindata);
    if(this.logindata.email=== '' ||this.logindata.password===''){
      this.snack.open("tabs cannot be empty","done")
    }this.login.loginpage(this.logindata).subscribe(
      response=>{
        console.log(response);
        sessionStorage.setItem('access_token',JSON.stringify(response));
        if(sessionStorage.getItem("access_token")===null){
          return;
        }
        // var t=JSON.parse(sessionStorage.getItem("access_token") || '{}')
        // console.log(t)
        this.snack.open("Login Successful","ok")
      },
      err=>{
              console.log(err);
              if(err!=null){
              this.snack.open("user not exists please register ")
            }
          }
    );
    this.login.loginpage(this.logindata).subscribe(
      (token)=>{
        localStorage.setItem('token',token.access_token);
      },
      (error)=>{
        console.error('Failed to login',error);
        alert('Incorrect email or password');
      }
    );
  }

//   constructor(private route:Router,private http:HttpClient,private register:LoginservicesService){}
//   onmain(){
//     this.route.navigate(['/']);
//       }

// ngOnInit(): void{
// this.email='';
// this.password='';
// }
// login(){
//   const formData = new FormData()
//   formData.append('email',this.email);
//   formData.append('password',this.password);
//   this.register.login(formData).subscribe(res=>{
//     if(res == null){
//       alert("emailid or password is wrong");
//       this.ngOnInit();
//     }else{
//       console.log("Login successful");
//       localStorage.setItem("token",res.accesstoken);
//       console.log(res.accesstoken)
//       this.register.setAccessToken(res.token);
//     }
//   },

//     err=>{
//       this.hashError=true;
//       alert("Login failed");
//       this.ngOnInit
//     }
//   )
// }
}
