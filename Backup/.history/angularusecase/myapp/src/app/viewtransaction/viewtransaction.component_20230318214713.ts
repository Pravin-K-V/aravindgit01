import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent {
  data:any;
  depositAmount: number = 0;


  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient ){

  }
  ngOnInit():void{
    this.ondeposit();

  }


  ondeposit(){
    this.user.viewtransaction().subscribe((response) => {
      this.data = response;
      console.log(response)});

    const id = this.user.deposit()

    this.http.put(`http://localhost:5000/users/${id}`,{'amount':this.depositAmount}).subscribe(data => {
      data=data
      console.log(this.data)

  });
  }

@ViewChild('content', { static: false }) el!: ElementRef;

makePDF() {
  let pdf = new jsPDF('p', 'pt', 'a4');

  pdf.setFontSize(20);
  pdf.text("TRANSACTION RECEIPT", 180, 30);

  // Add the table to the document
  const options = {
    startY: 60
  };
  (<any>pdf).autoTable({
    html: '#content table',
    startY: 60,
    margin: { top: 50 },
    styles: {
      fontSize: 12,
      font: "helvetica",
      cellPadding: 8,
      minCellHeight: 20
    },
    headStyles: {
      fillColor: [25, 118, 210],
      textColor: 255,
      halign: 'center'
    },
    bodyStyles: {
      halign: 'center'
    }
  });

  pdf.save("Transaction_Details.pdf");
}


  }

