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
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'frequencia', loadChildren: './Aluno/frequencia/frequencia.module#FrequenciaPageModule' },
  { path: 'turmas', loadChildren: './Aluno/turmas/turmas.module#TurmasPageModule' },
  { path: 'cadastrar-turma', loadChildren: './Professor/cadastrar-turma/cadastrar-turma.module#CadastrarTurmaPageModule' },
  { path: 'listar-turmas', loadChildren: './Aluno/listar-turmas/listar-turmas.module#ListarTurmasPageModule' },
  { path: 'frequencia-disciplina', loadChildren: './Aluno/frequencia-disciplina/frequencia-disciplina.module#FrequenciaDisciplinaPageModule' },  { path: 'ver-turma', loadChildren: './Professor/ver-turma/ver-turma.module#VerTurmaPageModule' },
  { path: 'scanear-codigo-aluno', loadChildren: './Professor/scanear-codigo-aluno/scanear-codigo-aluno.module#ScanearCodigoAlunoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
