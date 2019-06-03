import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderMenuComponent } from './header-menu.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  exports:[HeaderMenuComponent],
  declarations: [HeaderMenuComponent]
})
export class HeaderMenuPageModule {}
