import { Injectable } from '@angular/core';
import { HttpService } from './httpService/http.service';
import { environment } from 'src/environments/environment';
var URL_CADASTRAR_TURMA=environment.URL_CADASTRO_DISCIPLINA;
@Injectable({
  providedIn: 'root'
})
export class CadastroDisciplinaService {

  constructor(private http:HttpService) { }

  cadastrar(nome,descricao,inicio,fim,dias)
  {
    return this.http.post(URL_CADASTRAR_TURMA,{nome,descricao,inicio,fim,dias},{}).then(val=>{
      return val;
    })
  }
}
