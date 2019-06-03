import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeraQRionicPage } from './gera-qrionic.page';

const routes: Routes = [
  {
    path: '',
    component: GeraQRionicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeraQRionicPage]
})
export class GeraQRionicPageModule {}
