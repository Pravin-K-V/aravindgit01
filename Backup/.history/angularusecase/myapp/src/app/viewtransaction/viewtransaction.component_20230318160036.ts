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
  const doc = new jsPDF();
  doc.html(this.data);
  doc.save('test.pdf');
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




