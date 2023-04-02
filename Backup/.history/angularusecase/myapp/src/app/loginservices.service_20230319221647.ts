import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, switchMap, throwError, timer } from 'rxjs';
import jwt_decode from 'jwt-decode';

import {map} from 'rxjs/operators'

interface LoginResponse {
  access_token:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  access_token:string ="";
  loginUrl:string = '';
  new=true
  apiUrl:string ='';
  decodedToken:any;
  name:string ="";
  data:any;

 id:any;
 private readonly tokenExpiration$ = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router) {this.loginUrl="http://localhost:8000/login";this.apiUrl="http://localhost:8000/new/${id}";}

  getTokenExpiration$(): Observable<boolean> {
    return this.tokenExpiration$.asObservable();
  }

login(data: FormData): Observable<any>{
  const headers=new HttpHeaders({})
  return this.http.post<any>(this.loginUrl,data,{headers}).pipe(
    catchError((err) => {
      console.error('Failed to login', err);
      return throwError(err);
    }),
    map((token) => {
      const ACCESS_TOKEN_EXPIRE_MINUTES = 1;
      // Start timer to emit token expiration after 30 minutes
      const expirationTime = ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000;
      timer(expirationTime).pipe(
        switchMap(() => {
          // Emit token expiration and logout
          this.tokenExpiration$.next(true);

          return throwError('Token expired');
        })
      ).subscribe();
      return token;
    })
  );
 }


setAccessToken(token:string){
  this.access_token=token
}
name1(){
const name=this.decodedToken.name;
console.log(name)
return name

}


view(){
  // const new1=(localStorage.getItem("token"))
  // this.decodedToken=jwt_decode(new1);
  const id = this.decodedToken.id;
  return this.http.get(`http://localhost:8000/user/${id}`)
  };
summaryview(){
  const id=this.decodedToken.id;
  return this.http.get(`http://localhost:8000/usersummary/${id}`)
};
deposit(){

      const accountId = this.decodedToken.id;
      return accountId
    }
  transaction(sender_account_number:number,amount:number,receiver_account_number:number){
      return this.http.post("http://localhost:5000/new",{sender_account_number,amount,receiver_account_number});
    }

    senderid(){
    const id=this.decodedToken.id
    return id
    }
    viewtransaction(){
      const id=this.decodedToken.id
      return this.http.get(`http://localhost:5000/new1/${id}`)
    }
    viewthirdparty(){
      const id=this.decodedToken.id
      console.log(id);
      return this.http.get(`http://localhost:5200/thirdparty/${id}`)
    }
    logout(){
      localStorage.removeItem('token');
      localStorage.clear();
      this.router.navigate(['']);
    }
}



