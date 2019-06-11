import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../services/disciplinaService/disciplina.service';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {

  constructor(private disciplinasService:DisciplinaService) { }

  ngOnInit() {
    this.disciplinasService.getDisciplinasMatriculadas().then(disciplinas=>{
      if(disciplinas.data)
      {
        
      }
    });
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;


}
