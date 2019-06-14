import { Injectable } from '@angular/core';
import { HttpService } from './httpService/http.service';
import { environment } from 'src/environments/environment';
var URL_CADASTRAR_TURMA=environment.URL_CADASTRO_DISCIPLINA;
@Injectable({
  providedIn: 'root'
})
export class CadastroDisciplinaService {

  constructor(private http:HttpService) { }

  cadastrar(nome,descricao,inicio,fim,dias,senha)
  {
    return this.http.post(URL_CADASTRAR_TURMA,{name:nome,desc:descricao,start:inicio,end:fim,week:dias,password:senha},{}).then(val=>{
      return val;
    })
  }
}
