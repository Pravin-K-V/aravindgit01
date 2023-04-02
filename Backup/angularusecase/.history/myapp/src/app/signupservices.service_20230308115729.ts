import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupservicesService {
  private baseUrl:string="http://localhost:8000"

  constructor(private http:HttpClient) { }
  signuppage(name:string,
    email:string,
    password:string,
    phone:string,
    branch:string,
    date_of_birth:string,
    resident:string){
    return this.http.post("http://localhost:8000/new",{name,email,password,phone,branch,date_of_birth,resident});
  }
  storetoken(token:string){
    sessionStorage.setItem('token',token)
  }

}
