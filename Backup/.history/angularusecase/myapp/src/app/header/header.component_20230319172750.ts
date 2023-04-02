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

  constructor(private log:LoginservicesService,private snack:MatSnackBar){}
  ngOnInit(): void {

    this.data=this.log.name1
   }
  logout(){
    this.logout()
    this.snack.open("Logout Successfully","ok")

  }

}
