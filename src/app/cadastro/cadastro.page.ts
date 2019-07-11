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
  errors;
  constructor( private formBuilder: FormBuilder,private router:Router,private cadastroService:CadastroService){}
  tipo="Student"

  ngOnInit() {
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.minLength(6)]],
      cartao:['',[Validators.required,Validators.minLength(6)]],
      nome:['',[Validators.required,Validators.minLength(6)]],
      senha:['',[Validators.required,Validators.minLength(4),Validators.pattern(/([a-z].*\d|\d.*[a-z])/i)]],
      tipo:['Student',Validators.required]
    })

    
  }


  cadastrar()
  {
    let cartao:Number =this.form.get('cartao').value;
    let nome=this.form.get('nome').value;
    let senha=this.form.get('senha').value;
    let tipo=this.form.get('tipo').value;
    let email=this.form.get('email').value;
    let cartaoStr=cartao.toString();
    if(cartaoStr.length<8)
    {
      cartaoStr=cartaoStr.padStart(8,'0');
    }
    console.log(cartaoStr);
    this.cadastroService.cadastrar(cartaoStr,senha,nome,this.tipo,email).then(val=>{
      let data=JSON.parse(val.data);
      if(!data.saved)
      {
        this.errors=data.error;
      }
      else{
        this.router.navigateByUrl('');
      }
    })
  }

  selectStudent()
  {
    this.tipo="Student";
  }
  selectProfessor()
  {
    this.tipo="Professor";
  }

}