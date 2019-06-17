import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReadQRPage } from './read-qr.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HeaderMenuPageModule } from '../header-menu/header-menu.module';
import { LeitorQRService } from '../services/leitorQR/leitor-qr.service';

const routes: Routes = [
  {
    path: '',
    component: ReadQRPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderMenuPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReadQRPage],
  providers:[QRScanner,HTTP,BarcodeScanner,Dialogs,AndroidPermissions,LeitorQRService]
})
export class ReadQRPageModule {}
