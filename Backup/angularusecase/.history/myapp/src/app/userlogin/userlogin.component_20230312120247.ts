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

  email:string='';
  password:string='';
  hashError:boolean=false;
  loading=false;
  errormessage="";
  submit=false;
  passwordFieldType='password';


  constructor(private route:Router,private http:HttpClient,private register:LoginservicesService,private snack:MatSnackBar){}
  onmain(){
    this.route.navigate(['/']);
      }

ngOnInit(): void{
this.email='';
this.password='';
}
login(){
  const formData = new FormData()
  formData.append('username',this.email);
  formData.append('password',this.password);
  this.register.login(formData).subscribe(res=>{
    console.log(res);
    if(res == null){
      alert("emailid or password is wrong");
      this.ngOnInit();
    }else{
      console.log("Login successful");
      this.snack.open("Login Successful")
      localStorage.setItem("token",res.access_token);
      console.log(res.access_token)
      this.register.setAccessToken(res.token);
      console.log(this.register.get_id);
      // this.route.navigate(['userpage'])
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
