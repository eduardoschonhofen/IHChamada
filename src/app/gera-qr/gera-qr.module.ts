import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeraQRPage } from './gera-qr.page';
import { HTTP } from '@ionic-native/http/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';  //import this

const routes: Routes = [
  {
    path: '',
    component: GeraQRPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeraQRPage],
  providers:[QRScanner,HTTP]
})
export class GeraQRPageModule {}
