import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../services/disciplinaService/disciplina.service';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {
  disciplinas;
  disciplina;

  frequencias;
  constructor(private disciplinasService:DisciplinaService,private router:Router) { }

  ngOnInit() {
    this.disciplinasService.getDisciplinasMatriculadas().then(disciplinas=>{

      if(disciplinas.data)
      {
       // console.log(JSON.parse(disciplinas.data));
        this.disciplinas=JSON.parse(disciplinas.data).disciplines;
      }
    });
  }

  selecionaDisciplina(disciplina)
  {
    this.disciplina=disciplina;
   // console.log(this.disciplina);
    this.disciplinasService.getFrequenciaDisciplina(this.disciplina.id).then(val=>{
      console.log(val);
      if(val)
      {
        this.frequencias=val.attendances;
        this.frequencias=this.frequencias.map(val=>{
          return moment(val.created_at,'YYYY/MM/DD').format('DD/MM/YYYY');
        })
        console.log(this.frequencias);
      }
    })


  }
}
