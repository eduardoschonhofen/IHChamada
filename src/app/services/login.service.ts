import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { UserTypeService } from './user-type.service';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './httpService/http.service';
import { CookieService } from './cookieService/cookie.service';
var LOGIN_URL = environment.URL_LOGIN;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $logou = new BehaviorSubject<boolean>(false);
  constructor(private http: HTTP, private router: Router, private userTypeService: UserTypeService, private cookieService: CookieService) { }

  login(user, password) {
    return this.http.post(LOGIN_URL, { card_number: user, password: password }, {}).then(val => {
      let valor = JSON.parse(val.data);
      console.log(valor);
      if (valor.status) {
        let cookie = val.headers.get('SetCookies');
        this.cookieService.setCookie(cookie).then(val => {
          this.userTypeService.set(valor.user_type, user, password);
          this.router.navigateByUrl('/inicio');
          this.$logou.next(true);

        });

      }
    })
  }
  getLogou() {
    return this.$logou;
  }
  logout() {
    this.cookieService.deleteCookie().then(val => {
      this.router.navigateByUrl('');
    });

  }

  isLogged() {
    return this.cookieService.getCookie();
  }

}
