import { Component, OnInit } from '@angular/core';
import { LeitorQRService } from '../services/leitorQR/leitor-qr.service';

@Component({
  selector: 'app-read-qr',
  templateUrl: './read-qr.page.html',
  styleUrls: ['./read-qr.page.scss'],
})
export class ReadQRPage {

  qrCode;
  constructor(private qrScannerService:LeitorQRService) { }

  scan() {  // Optionally request the permission early
    this.qrScannerService.scan();
  }

}
