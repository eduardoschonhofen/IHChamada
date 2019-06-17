import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../../services/disciplinaService/disciplina.service';

@Component({
  selector: 'app-frequencia-disciplina',
  templateUrl: './frequencia-disciplina.page.html',
  styleUrls: ['./frequencia-disciplina.page.scss'],
})
export class FrequenciaDisciplinaPage implements OnInit {
  disciplina;
  frequencias;
  texto;
  constructor(private router:Router,private route:ActivatedRoute,private disciplinaService:DisciplinaService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.disciplina=JSON.parse(params.disciplina);
      this.texto=`Frequência Disciplina ${this.disciplina.nome}:`;
      this.disciplinaService.getFrequenciaDisciplina(this.disciplina.id).then(val=>{
        if(val.data)
        {
          this.frequencias=val.data;
        }

      })
    })
  }

}
