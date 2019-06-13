import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment.prod';
var LISTAR_TURMAS_URL=environment.URL_DISCIPLINAS;
@Injectable({
  providedIn: 'root'
})
export class ListarTurmasService {

  constructor(private http:HttpService) { }

  listarTurmas()
  {
    return this.http.get(LISTAR_TURMAS_URL,{},{}).then(val=>{
      return val.data;
    })
  }
}
