import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import * as ActionCable from 'actioncable';
@Component({
  selector: 'app-gera-qr',
  templateUrl: './gera-qr.page.html',
  styleUrls: ['./gera-qr.page.scss'],
})
export class GeraQRPage implements OnInit {
  qrCode;
  constructor(private http:HTTP,private qrScanner: QRScanner) { }

  ngOnInit() {
  }


  conectarSocket()
  {
   
      this.qrCode="321123321";
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
