import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroDisciplinaService } from '../../services/cadastro-disciplina.service';

@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.page.html',
  styleUrls: ['./cadastrar-turma.page.scss'],
})
export class CadastrarTurmaPage implements OnInit {

  dia=[false,false,false,false,false,false];
  form;
  constructor(private formBuilder:FormBuilder,private router:Router,private cadastroDisciplinaService:CadastroDisciplinaService)
  {

  }
  ngOnInit() {
    this.form=this.formBuilder.group({
      inicio:['',[Validators.required,Validators.min(6)]],
      fim:['',[Validators.required,Validators.min(6)]],
      descricao:['',[Validators.required,Validators.min(6)]],
      senha:['',[Validators.required,Validators.min(6)]],
      nome:['',[Validators.required,Validators.min(6)]],
    
    })
  }


  cadastrar()
  {

    let nome=this.form.get('nome').value;
    let descricao=this.form.get('descricao').value;
    let inicio=this.form.get('inicio').value;
    let fim=this.form.get('fim').value;
    let senha=this.form.get('senha').value;
    let obj={segunda:false,terca:false,quarta:false,quinta:false,sexta:false,sabado:false};
    obj.segunda=this.dia[1];
    obj.terca=this.dia[2];
    obj.quarta=this.dia[3];
    obj.quinta=this.dia[4];
    obj.sexta=this.dia[5];
    obj.sabado=this.dia[6];

    this.cadastroDisciplinaService.cadastrar(nome,descricao,inicio,fim,JSON.stringify(obj),senha).then(val=>{
      let data=JSON.parse(val.data);

        this.router.navigateByUrl('');
      }
    )
  }

  selectDia(dia)
  {
    this.dia[dia-1]=!this.dia[dia-1];
  }

}
