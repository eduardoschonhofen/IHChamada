import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { ScanService } from '../scan.service';
import { Platform } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeitorQRService {
   ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
  scanSub;
  constructor(private qrScanner: QRScanner, private dialog: Dialogs, private scanService: ScanService, private Platform: Platform,private router:Router) { }

  scan() {  // Optionally request the permission early,
    this.showCamera();

    return this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
           // this.dialog.alert(text);
            console.log("SCANEI");
            
            this.scanService.scan(text).then(val => {
              let valor = JSON.parse(val.data);
              console.log(valor);
              if (valor.status) {
                this.dialog.alert("Presença Registrada!");
              }
              else {
                this.dialog.alert("Erro ao Registrar Presença!");
              }
              this.closeScanner();
            })
          });
          this.Platform.backButton.subscribe(val => {
            this.closeScanner();
          })
          this.qrScanner.show();
          this.ionApp.style.display='none';
            
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => {
        this.dialog.alert(JSON.stringify(e), JSON.stringify((window.document.querySelector('ion-app') as HTMLElement).classList));
      }
      );
  }

  closeScanner()
  {
    console.log("FECHEI");
    this.qrScanner.hide();
    this.scanSub.unsubscribe();
    this.ionApp.style.display='block';
    console.log( this.ionApp.style.display);
    this.router.navigateByUrl('inicio');
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
