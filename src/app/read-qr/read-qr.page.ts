import { Component, OnInit } from '@angular/core';
import { LeitorQRService } from '../services/leitorQR/leitor-qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-qr',
  templateUrl: './read-qr.page.html',
  styleUrls: ['./read-qr.page.scss'],
})
export class ReadQRPage implements OnInit {

  qrCode;
  constructor(private qrScannerService:LeitorQRService,private router:Router) { }

  ngOnInit()
  {
    this.scan();
    this.router.navigateByUrl('/inicio');
  }
  scan() {  // Optionally request the permission early
    return this.qrScannerService.scan();
  }

}
