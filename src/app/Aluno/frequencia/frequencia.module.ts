import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FrequenciaPage } from './frequencia.page';
import { HeaderMenuPageModule } from '../../header-menu/header-menu.module';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaPage
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
  declarations: [FrequenciaPage]
})
export class FrequenciaPageModule {}
