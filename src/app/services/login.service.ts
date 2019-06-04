import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { UserTypeService } from './user-type.service';
var LOGIN_URL = environment.URL_LOGIN;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HTTP,private router:Router,private userTypeService:UserTypeService) { }
 
  login(user,password)
  {

    return this.http.post(LOGIN_URL,{card_number:user,password:password},{}).then(val=>{
      let valor = JSON.parse(val.data);
      console.log(valor);
      if(valor.status)
        {
          this.userTypeService.set(valor.user_type,user,password);
          this.router.navigateByUrl('/inicio');        
        }
    })
  }

  logout()
  {

  }

  isLogged()
  {

  }

}
