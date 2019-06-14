// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_LOGIN:"https://ihc-project.herokuapp.com/login" ,
  URL_SOCKET:"ws://ihc-project.herokuapp.com/cable",
  URL_SCAN:"https://ihc-project.herokuapp.com/interface/scan",
  URL_CADASTRO:"https://ihc-project.herokuapp.com/accounts/create",
  URL_DISCIPLINA_ALUNO:"https://ihc-project.herokuapp.com/disciplines/index",
  URL_DISCIPLINAS:"https://ihc-project.herokuapp.com/disciplines/index",
  URL_ENTRAR_TURMA:"https://ihc-project.herokuapp.com/disciplines/attendances",
  URL_CADASTRO_DISCIPLINA:"https://ihc-project.herokuapp.com/disciplines/create",
  URL_FREQUENCIA_DISCIPLINA:"https://ihc-project.herokuapp.com/disciplines/attendances"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
