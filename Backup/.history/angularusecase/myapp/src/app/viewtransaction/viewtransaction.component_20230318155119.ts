import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import * as FileSaver from 'file-saver';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import 'jspdf-autotable';

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
// generatePDF() {
//   const doc = new jsPDF();
//   doc.text('Hello world!', 10, 10);
//   doc.save('test.pdf');
// }

generatePDF() {

  const pdf = new jsPDF();

  // Add table content to PDF
  pdf.html(this.el.nativeElement),{
    callback:()=>{
      pdf.save("transaction.pdf")
    }
  }
}

// // Helper function to generate table data
// generateTableData() {
//   const data = this.data;
//   const columns = ['Transaction ID', 'Amount', 'Sender A/c', 'Receiver A/c', 'Date'];
//   const rows: string[] = [];


//   data.forEach((transaction:any) => {
//     const rowData = [
//       transaction.transaction_id,
//       transaction.amount,
//       transaction.sender_account_number,
//       transaction.receiver_account_number,
//       transaction.date
//     ];
//     rows.push(rowData);
//   });

//   return {
//     columns,
//     rows
//   };

// }

  }

