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
    return this.http.get(URL_DISCIPLINA_ALUNO,{},{});
  }
  getDisciplinas()
  {
    return this.http.get(URL_DISCIPLINAS,{},{});
  }

  entrarTurma(password)
  {
    return this.http.get(URL_ENTRAR_TURMA,{password:password},{});
  }

  getFrequenciaDisciplina(id)
  {
    return this.http.get(URL_FREQUENCIA_DISCIPLINA,{id:id},{});
  }

}
