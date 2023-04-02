import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import * as FileSaver from 'file-saver';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
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
  generatePDF() {
    const element = document.getElementById('pdf-content');
    // html2pdf().from(element).save();

}

// @ViewChild('content', { static: false }) el !: ElementRef;
// makePDF() {

//   let pdf = new jsPDF('p', 'pt', 'a4');
//   pdf.text("TRANSACTION RECEIPT", 10, 10);
//   pdf.html(this.el.nativeElement, {
//     callback: (pdf) => {
//       pdf.setFont('Arial', 'bold');
//       pdf.save("Transaction_Details.pdf")
//     }
//   });
// }
@ViewChild('content', { static: false }) el!: ElementRef;

makePDF() {
  let pdf = new jsPDF('p', 'pt', 'a4');

  // Add a title to the document
  pdf.setFontSize(20);
  pdf.text("TRANSACTION RECEIPT", 120, 30);

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

  // Save the document
  pdf.save("Transaction_Details.pdf");
}


  }

