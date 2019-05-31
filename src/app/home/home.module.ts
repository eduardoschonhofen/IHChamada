import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {NgxQRCodeModule} from 'ngx-qrcode2'
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers:[QRScanner,HTTP]
})
export class HomePageModule {}
