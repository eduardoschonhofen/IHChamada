import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private storage:Storage) { }

  setCookie(cookie)
  {
 return this.storage.set('cookie',cookie);
  }

  getCookie()
  {
    return this.storage.get('cookie');
  }

  deleteCookie()
  {
    return this.storage.remove('cookie');
  }
}
