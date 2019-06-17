import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { ScanService } from '../scan.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LeitorQRService {
  
  constructor(private qrScanner:QRScanner,private dialog:Dialogs,private scanService:ScanService,private Platform:Platform) { }

  scan() {  // Optionally request the permission early
    window.document.querySelector('ion-app').classList.add('transparentBody');
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       this.showCamera();
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {


    

         console.log('Scanned something', text);
         this.dialog.alert(text);
        
        this.scanService.scan(text).then(val=>{
          let valor=JSON.parse(val.data);
          if(valor.status)
          {
            
            this.dialog.alert("Presença Registrada!");
            this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
          }
          else
          {
            this.dialog.alert("Erro ao Registrar Presença!");
          }
        })
         
       });

       this.qrScanner.show().then(val=>{

        this.Platform.backButton.subscribe(val=>{
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        })

       })

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }
   
  showCamera() {    
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  hideCamera() {    
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
