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
      usuario:['',[Validators.required,Validators.minLength(6)]],
      senha:['',[Validators.required,Validators.minLength(4)]]
    })

  }

  logar()
  {
    let cartaoStr:String=this.form.get('usuario').value;
    if(cartaoStr.length<8)
    {
      cartaoStr=cartaoStr.padStart(8,'0');
    }
    this.loginService.login(cartaoStr,this.form.get('senha').value);
  }

  cadastrar()
  {
    this.router.navigateByUrl('/cadastro');
  }
}
