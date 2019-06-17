import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarTurmasPage } from './listar-turmas.page';
import { HeaderMenuPageModule } from '../../header-menu/header-menu.module';

const routes: Routes = [
  {
    path: '',
    component: ListarTurmasPage
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
  declarations: [ListarTurmasPage]
})
export class ListarTurmasPageModule {}
