import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Processo } from '../shared/processo';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css']
})
export class ProcessoFormComponent implements OnInit {

  processoForm: FormGroup;
  processoSelecionado: Processo = new Processo();;
  constructor(private fb: FormBuilder ) {
    this.criarForm();
   }

  ngOnInit(): void {
    
  }

  criarForm(){
    this.processoForm = this.fb.group({
      numeroProcesso: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]*$")
      ]],
      valor: ['', [
        Validators.required,
        Validators.min(30000)
      ]],
      escritorio: ['', [
        Validators.required,
        Validators.minLength(3)]
      ],
      reclamante: ['', [
        Validators.required]],
      aprovado: [false, [
      ]],
      ativo: [false, [
      ]]

    });
  }

  salvar(){
    console.log('enviou')
  }

}
