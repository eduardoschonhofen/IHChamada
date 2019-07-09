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
  constructor() { }

  ngOnInit() {

  }

}
