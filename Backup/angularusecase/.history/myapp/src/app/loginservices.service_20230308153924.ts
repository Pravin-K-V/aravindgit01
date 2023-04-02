import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  accesstoken: string="";
  loginurl:string="";


  constructor(private http:HttpClient,private router:Router) {

     this.loginurl="http://localhost:8000/login";
  }
login(data:FormData):Observable<any>{
const headers= new HttpHeaders({})
this.loginurl="http://localhost:8000/login"
return this.http.post<any>(this.loginurl,data,{headers});
}
setAccessToken(token:string){
  this.accesstoken=token
}


//   isAuthenticated():boolean{
//     if (sessionStorage.getItem('token')!==null) {
//         return true;
//     }
//     return false;
//   }
//   // login(email:string,password:string){
//   //   //send data to login api (firebase)
//   //     return this.http
//   //     .post<{idToken:string}>(
//   //       "http://localhost:8000/login",
//   //           {email,password}
//   //     );
//   // }
//   storeToken(token:string){
//     sessionStorage.setItem('token',token);
// }
// canAuthenticate(){
//   if (this.isAuthenticated()) {
//     //redirect to dashboard
//     console.log("login successful")
//     // this.router.navigate(['/']);
//   }
// }

 }
