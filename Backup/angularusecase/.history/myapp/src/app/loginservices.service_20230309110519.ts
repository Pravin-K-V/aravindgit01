import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, switchMap, throwError, timer } from 'rxjs';
import { map } from 'rxjs/operators';
interface LoginResponse{
  access_token:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer'+sessionStorage.getItem('access_token')
  });
  private baseUrl:string="http://localhost:8000"
  private readonly tokenExpiration$ = new BehaviorSubject<boolean>(false);


  constructor(private http:HttpClient,private router:Router) {}

getTokenExpiration$():Observable<boolean>{
  return this.tokenExpiration$.asObservable();
}
loginpage(logindata:any){
  return this.http.post<LoginResponse>(`${this.baseUrl}/login`,logindata,{headers:this.headers});
catchError((err)=>{
  console.error('Failed to login',err);
  return throwError(err);
}),
map((token)=>{
  const ACCESS_TOKEN_EXPIRE_MINUTES = 5;
  const expirationTime = ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000;
  timer(expirationTime).pipe(
    switchMap(()=>{
      this.tokenExpiration$.next(true);
      this.logout();
      return throwError('Token Expired');
    })
  ).subscribe();
    return token;
})
}
isLoggedIn(){
  let user=sessionStorage.getItem("acess_token")
  return user
}
logout(){
  sessionStorage.removeItem('token');
  sessionStorage.clear();
}
}
