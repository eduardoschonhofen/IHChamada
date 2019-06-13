import { Component, OnInit } from '@angular/core';
import { ListarTurmasService } from '../services/listarTurmasService/listar-turmas.service';

@Component({
  selector: 'app-listar-turmas',
  templateUrl: './listar-turmas.page.html',
  styleUrls: ['./listar-turmas.page.scss'],
})
export class ListarTurmasPage implements OnInit {
turmas;
  constructor(private turmasService:ListarTurmasService) { }

  ngOnInit() {
    this.turmasService.listarTurmas().then(val=>{
      this.turmas=val;
    })
  }

}
