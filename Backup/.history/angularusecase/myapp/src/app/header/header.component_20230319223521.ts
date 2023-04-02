import { MatSnackBar } from '@angular/material/snack-bar';

import { Component } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data:any;
  userName: any;

  constructor(private log:LoginservicesService,private snack:MatSnackBar){}
  ngOnInit(): void {

    // this.data=this.log.name1()
    // console.log(this.data)
    this.log.name1().subscribe((name: string) => {
      this.userName = name;
   });
  }
  logout(){
    this.logout()
    this.snack.open("Logout Successfully","ok")

  }

}
