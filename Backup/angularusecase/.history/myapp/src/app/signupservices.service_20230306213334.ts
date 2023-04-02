import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupservicesService {
  private baseUrl:string="http://localhost:8000"

  constructor(private http:HttpClient) { }
  signuppage(name:string,email:string,password:string,mobile:string){
    return this.http.post("http://localhost:8000/Users",{name,email,password,mobile});
  }

}
