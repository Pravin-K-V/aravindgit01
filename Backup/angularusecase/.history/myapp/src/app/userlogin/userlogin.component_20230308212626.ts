import { Router, TitleStrategy } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email:string='';
  password:string='';
  hashError: boolean=false;
  loading=false;
  errormessage="";
  submit=false;
  constructor(private route:Router,private http:HttpClient,private register:LoginservicesService){}
  onmain(){
    this.route.navigate(['/']);
      }

ngOnInit(): void{
this.email='';
this.password='';
}
login(){
  const formData = new FormData()
  formData.append('email',this.email);
  formData.append('password',this.password);
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
