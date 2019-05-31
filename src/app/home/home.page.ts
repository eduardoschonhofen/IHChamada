import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import * as ActionCable from 'actioncable';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrCode;
  constructor(private http:HTTP,private qrScanner: QRScanner) { }

  scan() {  // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

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
   
  conectarSocket()
  {
   

      let cable=ActionCable.createConsumer('ws://200.180.162.179:3000/cable');
      let conexao=conexaosocket.bind(this,this.http);
      cable.subscriptions.create('RoomChannel',conexao);

    
    
    
  }
}


let conexaosocket={
  bind:function(val,http)
  {
    this.val=val;
    this.http=http;
    return this;
  },

   connected:function(data)
  {
  //  this.val.qrCode="1q23";
  //  console.log(data);
    this.http.get('http://200.180.162.179:3000/interface/scan?code=eae',{},{}).then(data=>{
      console.log(data);
    })
  },
  disconnected:function()
  {
    console.log("AAA");
  },
  received:function(data)
  {
    this.val.qrCode=data.code;
    console.log(data.code);
  }



  
}