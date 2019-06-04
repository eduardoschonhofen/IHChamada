import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder,private router:Router){}


  ngOnInit() {
    this.form=this.formBuilder.group({
      email:['',Validators.required,Validators.min(6)],
      cartao:['',Validators.required,Validators.min(6)],
      nome:['',Validators.required,Validators.min(6)],
      senha:['',Validators.required,Validators.min(6)],
      tipo:['',Validators.required]
    })
  }


  cadastrar()
  {
    this.router.navigateByUrl('/cadastro');
  }

}