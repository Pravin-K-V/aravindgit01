import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupservicesService } from './../signupservices.service';
import { Component } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
submit=false;
data={
account_no:"",
name :"",
Bank_name:"",
branch:"",
IFSC_CODE:"",
adder_id:""}
errormessage="";
loading=false;
constructor(private register:SignupservicesService,private user:LoginservicesService,private route:Router,private snack:MatSnackBar){}
onsubmit(){
  this.loading=true
  const account_no=Number(this.data.account_no)
  const adder_id = Number(this.user.decodedToken.id);
  console.log(adder_id);
  this.register.thirdparty(account_no,this.data.name,this.data.Bank_name,this.data.branch,this.data.IFSC_CODE,adder_id).subscribe(
    {
      // next:data=>{
      //  console.log("registration successful")
      // },
      error:data=>{
        if(data.error.error.message="INVALID_EMAIL"){
this.errormessage="Invalid email"
        }else if(data.error.error.message=="EMAIL_EXISTS") {
          this.errormessage="Email already exists"
        }else{
          this.errormessage="Unknow error occured while registration"
        }




      }
    }
  ).add(()=>{

    console.log('Added');
    this.snack.open("Added Successfully","ok");
    this.route.navigate(['thirdparty']);
  })
}

}
