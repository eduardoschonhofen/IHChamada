import { Component, OnInit } from '@angular/core';
import { ListarTurmasService } from '../../services/listarTurmasService/listar-turmas.service';
import { AlertController } from '@ionic/angular';
import { DisciplinaService } from 'src/app/services/disciplinaService/disciplina.service';

@Component({
  selector: 'app-listar-turmas',
  templateUrl: './listar-turmas.page.html',
  styleUrls: ['./listar-turmas.page.scss'],
})
export class ListarTurmasPage implements OnInit {
turmas;
  constructor(private turmasService:ListarTurmasService,public alertController: AlertController,public disciplina:DisciplinaService) { }

  ngOnInit() {
    this.turmasService.listarTurmas().then(val=>{

      this.turmas=JSON.parse(val).disciplines;
    
    })
  }

  entraTurma(id)
  {
    this.presentAlertPrompt(id);
  }



  async presentAlertPrompt(id) {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'senha',
          type: 'text',
          placeholder: 'Senha:',
          id:'senha'
        },
    
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Cadastrar',
          handler: data => {
            this.disciplina.entrarTurma(id,data.senha);
          }
        }
      ]
    });

    await alert.present();
  }
}
