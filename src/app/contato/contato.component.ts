import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: ContatoService, private fb: FormBuilder) { } 

  ngOnInit(): void {

    this.formulario = this.fb.group({
      nome : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })


  }

    submit(){

      
      const erroNomeRequired = this.formulario.get('nome')?.errors?.['required'];
      const erroEmailInvalido = this.formulario.get('email')?.errors?.['email'];
      const erroEmailRequired = this.formulario.get('email')?.errors?.['required'];
      
      
      console.log('erroNomeRequired', erroNomeRequired);
      console.log('erroEmailInvalido', erroEmailInvalido);
      console.log('erroEmailRequired', erroEmailRequired);

      //this.service.save(c).subscribe(resposta => {
        //console.log(resposta);
      //});
    }

}
