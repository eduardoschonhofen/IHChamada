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
  { path: 'frequencia', loadChildren: './frequencia/frequencia.module#FrequenciaPageModule' },
  { path: 'turmas', loadChildren: './turmas/turmas.module#TurmasPageModule' },
  { path: 'cadastrar-turma', loadChildren: './cadastrar-turma/cadastrar-turma.module#CadastrarTurmaPageModule' },
  { path: 'listar-turmas', loadChildren: './listar-turmas/listar-turmas.module#ListarTurmasPageModule' },
  { path: 'frequencia-disciplina', loadChildren: './frequencia-disciplina/frequencia-disciplina.module#FrequenciaDisciplinaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
