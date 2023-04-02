import { UserloginComponent } from './../../../.history/myapp/src/app/userlogin/userlogin.component_20230312135959';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, switchMap, throwError, timer } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  access_token:string ="";
  loginUrl:string = '';
  new=true
  apiUrl:string ='';

  name:string ="";
  data:any;


  constructor(private http:HttpClient,private token:UserloginComponent) {this.loginUrl="http://localhost:8000/login";this.apiUrl="http://localhost:8000/new/${id}";}

login(data: FormData): Observable<any>{
  const headers=new HttpHeaders({})
  return this.http.post<any>(this.loginUrl,data,{headers});
}
setAccessToken(token:string){
  this.access_token=token
}


view(){

  this.http.get(this.apiUrl).subscribe((response) => {
    // Handle the response from the API here
    this.data = response;
  });
}

}

