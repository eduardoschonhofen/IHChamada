import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder,private router:Router,private loginService:LoginService){}

  ngOnInit() {
    this.form=this.formBuilder.group({
      usuario:['',[Validators.required,Validators.min(6)]],
      senha:['',[Validators.required,Validators.min(6)]]
    })
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
