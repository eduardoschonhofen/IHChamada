import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: './inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'geraQR', loadChildren: './gera-qr/gera-qr.module#GeraQRPageModule' },
  { path: 'readQR', loadChildren: './read-qr/read-qr.module#ReadQRPageModule' },
  { path: 'gera-qrionic', loadChildren: './gera-qrionic/gera-qrionic.module#GeraQRionicPageModule' },  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
