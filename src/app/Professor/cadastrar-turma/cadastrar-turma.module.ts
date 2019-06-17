import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarTurmaPage } from './cadastrar-turma.page';
import { HeaderMenuPageModule } from '../../header-menu/header-menu.module';

const routes: Routes = [
  {
    path: '',
    component: CadastrarTurmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderMenuPageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarTurmaPage]
})
export class CadastrarTurmaPageModule {}
