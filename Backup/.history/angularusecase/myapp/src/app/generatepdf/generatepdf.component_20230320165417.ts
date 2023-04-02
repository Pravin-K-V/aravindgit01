import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-generatepdf',
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.css']
})
export class GeneratepdfComponent {
  data:any;
  depositAmount: number = 0;
  startDate = new Date();
  endDate = new Date();


  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient ){

  }
  ngOnInit():void{


  }


  onview(){
    // this.user.datetransaction().subscribe((response) => {
    //   this.data = response;
    //   console.log(response)});
    const datePipe = new DatePipe('en-US');
    // const formattedStartDate = this.startDate?.toISOString?.() ?? new Date().toISOString();
    const startDate = new Date (this.startDate);
    const formattedStartDate=startDate.toISOString().substring(0,10);
    const endDate=new Date(this.endDate)
    const formattedEndDate = endDate.toISOString().substring(0,10);
    const params = new HttpParams()
      .set('start_date', formattedStartDate)
      .set('end_date', formattedEndDate);
      console.log(formattedStartDate)
    const id = this.user.deposit()
    return this.http.get(`http://localhost:5000/transadate/${id}`,{params} ).subscribe(data => {
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

  pdf.save("Transaction_Details_date.pdf");
}
}
