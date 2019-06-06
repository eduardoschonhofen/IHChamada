import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
var URL_CADASTRO=environment.URL_CADASTRO;
@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:HTTP) { }

  cadastrar(cartao,senha,nome,tipo,email)
  {
    return this.http.post(URL_CADASTRO,{card_number:cartao,password:senha,name:nome,user_type:tipo,email:email},{});
  }
}
