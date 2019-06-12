import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { CookieService } from '../cookieService/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HTTP,private cookieService:CookieService) { }

  post(url,data,header)
  {
  return  this.cookieService.getCookie().then(cookie=>{
      header={'Cookie':cookie};
      return this.http.post(url,data,header);
    })
  }

  get(url,data,header)
  {
    return this.cookieService.getCookie().then(cookie=>{
      header={'Cookie':cookie};
      return this.http.get(url,data,header);
    })
  }
}
