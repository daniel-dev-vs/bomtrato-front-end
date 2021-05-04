import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from './shared/processo';
import { IProcesso } from './shared/processo.interface';
import { ProcessoService } from './shared/processo.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {


  titulo = 'Página de processos';
  items = [];
  processos: IProcesso[];


  constructor(private _processoService: ProcessoService, private _router: Router) { }

  ngOnInit(): void {
    this.carregarProcessos();
  }

  carregarProcessos(): void {
    this._processoService.getProcessos()
      .subscribe(

        (processos: IProcesso[]) => {
          this.processos = processos;
          this.items = Array.from(processos);
        },
        (err) => {

          console.error(err);
        }
      );
  }

  deletar(id): void {
    if (confirm(`Você tem certeza que quer deletar o processo de id ${id} ?`)) {
      this._processoService.deleteProcesso(id)
        .subscribe((e: any) => {

          alert('Excluído com sucesso');

          this.carregarProcessos();
        },
          err => {
            alert('não foi possível excluir');
            console.error(err);

          },
          () => {
            this._router.navigate(['processos']);
          });

    }
  }


  onChangePage(processos: Array<any>): void {
    // update current page of items
    this.processos = processos;
  }

}
