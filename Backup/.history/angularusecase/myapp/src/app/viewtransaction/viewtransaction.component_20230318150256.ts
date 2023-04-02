import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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


  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient ){

  }
  ngOnInit():void{
    this.ondeposit();

  }


  ondeposit(){
    this.user.viewtransaction().subscribe((response) => {
      this.data = response;
      console.log(response)});

    // const id = this.user.deposit()

    // this.http.put(`http://localhost:5000/users/${id}`,{'amount':this.depositAmount}).subscribe(data => {
    //   data=data
    //   console.log(this.data)

  // });
  }
//   generatePDF() {
//     const element = document.getElementById('pdf-content');
//     // html2pdf().from(element).save();

// }
generatePDF() {
  const doc = new jsPDF();
  doc.text('Hello world!', 10, 10);
  doc.save('test.pdf');
}

//   pdfMake.vfs = pdfFonts.pdfMake.vfs;
// const documentDefinition = {
//   content: [
//     {
//       text: 'Hello, world!',
//       style: 'header',
//     },
//     {
//       text: 'This is some sample text.',
//       style: 'body',
//     },
//   ],
//   styles: {
//     header: {
//       fontSize: 18,
//       bold: true,
//       margin: [0, 0, 0, 10], // top, right, bottom, left
//     },
//     body: {
//       fontSize: 12,
//     },
//   },
// };
// pdfMake.createPdf(documentDefinition).getBlob((blob: Blob) => {
//   FileSaver.saveAs(blob, 'example.pdf');
// });


  }

