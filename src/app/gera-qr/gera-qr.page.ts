import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import * as ActionCable from 'actioncable';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/httpService/http.service';
import { UserTypeService } from '../services/user-type.service';

var URL_SOCKET=environment.URL_SOCKET;
var URL_SCAN=environment.URL_SCAN;
@Component({
  selector: 'app-gera-qr',
  templateUrl: './gera-qr.page.html',
  styleUrls: ['./gera-qr.page.scss'],
})
export class GeraQRPage implements OnInit {
  qrCode;
  constructor(private http:HttpService,private qrScanner: QRScanner,private userType:UserTypeService) { }

  ngOnInit() {
    this.conectarSocket();
  }


  conectarSocket()
  {   
     // this.qrCode="321123321";

if(this.userType.user_type=="Student")
{
  this.qrCode=JSON.stringify({code:this.userType.user,discipline:'1'});
}
else
{
  let cable=ActionCable.createConsumer(URL_SOCKET);
  let conexao=conexaosocket.bind(this,this.http);
  cable.subscriptions.create('RoomChannel',conexao);
}
  

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
    this.http.get(URL_SCAN,{discipline:"1",code:"eae"},{}).then(data=>{
      console.log(data);
    })
  },
  disconnected:function()
  {
    console.log("AAA");
  },
  received:function(data)
  {
    this.val.qrCode=JSON.stringify(data);
    console.log(data);
  }
}
