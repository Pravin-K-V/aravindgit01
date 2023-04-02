import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  private baseUrl:string="http://localhost:8000"

  constructor(private http:HttpClient,private router:Router) { }
  // loginpage(data:any){
  //   return this.http.get("http://localhost:8000/login",data);
  // }
  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }
  login(email:string,password:string){
    //send data to login api (firebase)
      return this.http
      .post<{idToken:string}>(
        "http://localhost:8000/login",
            {email,password}
      );
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token);
}
canAuthenticate(){
  if (this.isAuthenticated()) {
    //redirect to dashboard
    console.log("login successful")
    // this.router.navigate(['/']);
  }
}

}
