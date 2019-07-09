import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../services/user-type.service';
import { DisciplinaService } from '../services/disciplinaService/disciplina.service';
import * as moment from 'moment';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  disciplinas;
  frequencias;
  disciplinaFreq = [];
  constructor(public userType: UserTypeService, private disciplinasService: DisciplinaService) { }

  ngOnInit() {

    if (this.userType.isStudent()) {
      this.getDisciplinas().then(val => {
        for (let i = 0; i < this.disciplinas.length; i++) {
          this.selecionaDisciplina(this.disciplinas[i]).then(val => {
            let valor={disciplina:'',frequencia:0};
            valor.disciplina = this.disciplinas[i];
            valor.frequencia = val;
            console.log(valor);
            this.disciplinaFreq.push(valor);
          })

        }
        console.log(this.disciplinaFreq);

      });



    }
    else {

    }

  }


  getDisciplinas() {
    return this.disciplinasService.getDisciplinasMatriculadas().then(disciplinas => {
      if (disciplinas.data) {
        // console.log(JSON.parse(disciplinas.data));
        this.disciplinas = JSON.parse(disciplinas.data).disciplines;
      }
    });
  }

  selecionaDisciplina(disciplina) {

    // console.log(this.disciplina);
    return this.disciplinasService.getFrequenciaDisciplina(disciplina.id).then(val => {
      if (val) {
        this.frequencias = val.attendances;
        return this.frequencias.length;
      }
    })
  }

}
