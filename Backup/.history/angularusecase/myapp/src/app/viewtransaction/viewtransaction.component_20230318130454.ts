import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from '../loginservices.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';



@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent {
  data:any;
  depositAmount: number = 0;


  constructor(private user:LoginservicesService,private router:Router,private route:ActivatedRoute,private http:HttpClient ){}
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
  generatePDF() {
    const element = document.getElementById('pdf-content');
    // html2pdf().from(element).save();



}
const pdfMake.vfs = pdfFonts.pdfMake.vfs;
generatePdf() {
    const documentDefinition = {
      content: [
        { text: 'My PDF Document', style: 'header' },
        { text: 'This is some sample text.', style: 'body' }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        body: {
          fontSize: 12
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download('my-document.pdf');
  }

}
