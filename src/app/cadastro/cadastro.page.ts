import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder,private router:Router,private cadastroService:CadastroService){}


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
    let cartao=this.form.get('cartao').value;
    let nome=this.form.get('nome').value;
    let senha=this.form.get('senha').value;
    let tipo=this.form.get('tipo').value;
    let email=this.form.get('email').value;
    this.cadastroService.cadastrar(cartao,nome,senha,tipo,email).then(val=>{

    })
  }

}