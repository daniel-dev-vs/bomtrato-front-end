import { IProcesso } from './../shared/processo.interface';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Processo } from '../shared/processo';
import { ProcessoService } from '../shared/processo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css']
})
export class ProcessoFormComponent implements OnInit {

  processoForm: FormGroup;
  titulo: string;
  descAtivo: string;
  descAprovado: string;
  mensagem: string;
  idParam: string;
  enviado = false;

  constructor(private _fb: FormBuilder,
    private _processoService: ProcessoService,
    private _router: Router,
    private _route: ActivatedRoute) {
    console.log(_router);

  }

  ngOnInit(): void {
    this.criarForm();

    this._route.params.subscribe(params => {
      this.idParam = params['id'];

      this.titulo = this.idParam ? 'Editar processo' : 'Cadastrar novo processo';
      this.mensagem = this.idParam ? 'Editado' : 'Cadastrado'

      if (!this.idParam)
        return;

      this._processoService.getProcesso(this.idParam)
        .subscribe(
          (processo: Processo) => {

            this.processoForm.patchValue(processo)
            this.descAtivo = processo.aprovado == true ? 'Desaprovar' : 'Aprovar';
            this.descAprovado = processo.ativo == true ? 'Inativar' : 'Ativar';
          },
          response => {
            if (response.statusCode == 404) {
              this._router.navigate(['NotFound']);
            }
          });
    });

  }

  criarForm() {
    this.processoForm = this._fb.group({
      id: [0],
      numeroProcesso: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]*$')
      ]],
      valor: ['', [
        Validators.required,
        Validators.min(30000),
        Validators.pattern('^[0-9]*$')
      ]],
      escritorio: ['', [
        Validators.required,
        Validators.maxLength(50), Validators.pattern(/[a-zA-Z\s]*$/)],

      ],
      reclamante: ['', [
        Validators.required,
        Validators.maxLength(100),Validators.pattern(/[a-zA-Z\s]*$/)],
        ],
      aprovado: [false, [
      ]],
      ativo: [false, [
      ]]

    });
  }

  get f() { return this.processoForm.controls; }


  salvar(): boolean {

    this.enviado = true;

    // stop here if form is invalid
    if (this.processoForm.invalid) {
      return false;
    }


    let envio: Processo = new Processo().converterFormParaProcesso(this.processoForm.value);

    if (this.idParam !== undefined) {
      envio.id = parseInt(this.idParam);
      this._processoService.updateProcesso(envio).
        subscribe((x) => {
          alert(`${this.mensagem} com sucesso`);

          this._router.navigate(['processos']);

        },
          erro => {

            if (erro.status == 409) {
              alert('Não foi possível completar a requisição, pois esse registro já existe');
              this._router.navigate(['processos']);
            } else {
              alert('Ops houve algum problema por favor tente de novo.');
            }
            console.error(erro);
          });

    } else {
      this._processoService.addProcesso(envio)
        .subscribe((x) => {
          alert(`${this.mensagem} com sucesso`);

          this._router.navigate(['processos']);

        }, erro => {

          if (erro.status == 409) {
            alert('Não foi possível completar a requisição, pois esse registro já existe');
            this._router.navigate(['processos']);
          } else {
            alert('Ops houve algum problema por favor tente de novo.');
          }
          console.error(erro);
        });
    }


    return true;
  }

}
