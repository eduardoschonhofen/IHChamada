import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { UserTypeService } from './user-type.service';
import { HttpService } from './httpService/http.service';
var URL_SCAN = environment.URL_SCAN;
@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor(private http:HttpService,private router:Router,private userType:UserTypeService) { }

  scan(id)
  {
    let code = JSON.parse(id);
    return this.http.post(URL_SCAN,{code:code.code,discipline:code.discipline,card_number:this.userType.user},{});
  }
}
