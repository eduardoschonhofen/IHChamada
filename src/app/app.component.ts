import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

  ];

  mudarPageAluno()
  {
    this.appPages=[    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Escanear Código QR',
      url: '/readQR',
      icon: 'barcode'
    },
    {
      title: 'Gerar Código QR',
      url: '/geraQR',
      icon: 'finger-print'
    },
    {
      title: 'Visualizar Presenças',
      url: '/frequencia',
      icon: 'checkmark-circle'
    },
    {
      title: 'Lista de Disciplinas',
      url: '/listar-turmas',
      icon: 'list-box'
    },
];
  }

  mudarPageProfessor()
  {
    this.appPages=[    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Escanear Código QR',
      url: '/readQR',
      icon: 'barcode'
    },
    {
      title: 'Gerar Código QR',
      url: '/geraQR',
      icon: 'finger-print'
    },
    {
      title: 'Criar Turma',
      url: '/cadastrar-turma',
      icon: 'add'
    },
   ];
  }


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService:LoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.loginService.getLogou().subscribe(val=>{
      if(val=="Student")
      {
        this.mudarPageAluno();
      }
      else if(val=="Professor")
      {
        this.mudarPageProfessor();
      }
      else
      {
        this.appPages=[];
      }
    })
  }
  
  logout()
  {
    this.loginService.logout();
  }
}
