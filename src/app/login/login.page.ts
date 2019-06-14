import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from '../services/cookieService/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  form;
  constructor( private cookieService:CookieService,private formBuilder: FormBuilder,private router:Router,private loginService:LoginService){}

  ngOnInit() {
    this.form=this.formBuilder.group({
      usuario:['',[Validators.required,Validators.min(6)]],
      senha:['',[Validators.required,Validators.min(6)]]
    })
/*
    this.cookieService.getCookie().then(cookie=>{
      if(cookie)
      {
        console.log(cookie);
        this.router.navigateByUrl('/inicio');
      }
    })
*/
  }

  logar()
  {
    this.loginService.login(this.form.get('usuario').value,this.form.get('senha').value);
  }

  cadastrar()
  {
    this.router.navigateByUrl('/cadastro');
  }
}
