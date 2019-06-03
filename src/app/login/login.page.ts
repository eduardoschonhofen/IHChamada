import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder,private router:Router){}

  usuarios=["00274732","00274726","00274744"];
  ngOnInit() {
    this.form=this.formBuilder.group({
      usuario:['',Validators.required,Validators.min(6)],
      senha:['',Validators.required,Validators.min(6)]
    })
  }

  logar()
  {
    if(this.usuarios.includes(this.form.get('usuario').value) && this.usuarios.includes(this.form.get('senha').value))
    this.router.navigateByUrl('/inicio');
  }

  cadastrar()
  {
    
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
