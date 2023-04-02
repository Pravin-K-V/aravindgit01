import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, switchMap, throwError, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  accesstoken:string ="";
  loginUrl:string = '';
  new=true



  constructor(private http:HttpClient) {this.loginUrl="http://localhost:8000/login";}

login(data: FormData): Observable<any>{
  const headers=new HttpHeaders({})
  return this.http.post<any>(this.loginUrl,data,{headers});
}
setAccessToken(token:string){
  this.accesstoken=token
}
}
