import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import * as FileSaver from 'file-saver';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


import jsPDF from 'jspdf';

@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent {
  data:any;
  depositAmount: number = 0;
  jsPDF= {
    autoTable: ""
}
@ViewChild('content',{static:false}) el!:ElementRef
  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient ){

  }
  ngOnInit():void{
    this.ondeposit();

  }


  ondeposit(){
    this.user.viewtransaction().subscribe((response) => {
      this.data = response;
      console.log(response)});
    }
generatePDF() {
//   const doc = new jsPDF();
//   doc.table(this.data.transaction_id ,
//   this.data.amount ,
//   this.data.sender_account_number ,
//  this.data.receiver_account_number,
//  this.data.date);
//   doc.save('test.pdf');
// Create a new jsPDF instance
const doc = new jsPDF();

// Get the table HTML element using its ID
const table = document.getElementById('myTable');

// Use jsPDF autotable plugin to generate the PDF from the HTML table
doc.table(this.data.transaction_id ,
    this.data.amount ,
    this.data.sender_account_number ,
   this.data.receiver_account_number,
   this.data.date );

// Save the PDF
doc.save('table.pdf');

}
table(){
  this.data.transaction_id ,
  this.data.amount ,
  this.data.sender_account_number,
  this.data.receiver_account_number,
  this.data.date
}

// generatePDF() {

//   const pdf = new jsPDF();

//   // Add table content to PDF
//   pdf.html(this.el.nativeElement),{
//     callback:(pdf:any)=>{
//       pdf.save("transaction.pdf")
//     }
//   }
}




