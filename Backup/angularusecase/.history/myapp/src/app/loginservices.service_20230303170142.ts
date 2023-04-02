import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  private baseUrl:string="http://localhost:8000"

  constructor(private http:HttpClient) { }
  loginpage(data:any){
    return this.http.get("http://localhost:8000/login",data)
  }
}
