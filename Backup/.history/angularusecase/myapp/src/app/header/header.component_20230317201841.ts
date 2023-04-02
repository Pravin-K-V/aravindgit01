import { MatSnackBar } from '@angular/material/snack-bar';

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private log:LoginservicesService,private snack:MatSnackBar){}

  logout(){
    this.logout()
    this.snack.open("Logout Successfully","ok")

  }

}
