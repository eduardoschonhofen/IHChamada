import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder){}


  ngOnInit() {
    this.form=this.formBuilder.group({
      usuario:['',Validators.required],
      senha:['',Validators.required]
    })
  }

  logar()
  {

  }

  cadastrar()
  {
    
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
