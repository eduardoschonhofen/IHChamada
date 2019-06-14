import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../services/disciplinaService/disciplina.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {
  disciplinas;
  constructor(private disciplinasService:DisciplinaService,private router:Router) { }

  ngOnInit() {
    this.disciplinasService.getDisciplinasMatriculadas().then(disciplinas=>{
      if(disciplinas.data)
      {
        this.disciplinas=disciplinas.data;
      }
    });
  }

  selecionaDisciplina(index)
  {
    let extra:NavigationExtras = {queryParams:{
      disciplina:JSON.stringify(this.disciplinas[index])
    }}
    this.router.navigateByUrl('/frequencia-disciplina',);
  }
}
