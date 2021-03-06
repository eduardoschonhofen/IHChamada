import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment.prod';
var URL_DISCIPLINA_ALUNO=environment.URL_DISCIPLINA_ALUNO;
var URL_DISCIPLINAS=environment.URL_DISCIPLINAS;
var URL_ENTRAR_TURMA=environment.URL_ENTRAR_TURMA;
var URL_FREQUENCIA_DISCIPLINA = environment.URL_FREQUENCIA_DISCIPLINA;
@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http:HttpService) { }

   getDisciplinasMatriculadas()
  {
    return this.http.post(URL_DISCIPLINA_ALUNO,{},{});
  }
  getDisciplinas()
  {
    return this.http.post(URL_DISCIPLINAS,{},{});
  }

  entrarTurma(idDisciplina,password)
  {
    return this.http.post(URL_ENTRAR_TURMA,{id:idDisciplina,password:password},{});
  }

  getFrequenciaDisciplina(id)
  {
    return this.http.post(URL_FREQUENCIA_DISCIPLINA,{id:id},{}).then(val=>{
      return JSON.parse(val.data);
    });
  }

}
