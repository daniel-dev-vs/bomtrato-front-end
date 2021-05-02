import { Component, OnInit } from '@angular/core';
import { Processo } from './shared/processo';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {


  titulo = 'Página de processos';

  processos: Processo[] = [
    {
      id: 1,
      numeroProcesso: 123445678,
      valor: 50000,
      escritorio: "são paulo",
      reclamante: "reclamao",
      ativo: false,
      aprovado: false

    },
    {
      id: 2,
      numeroProcesso: 123445678,
      valor: 50000,
      escritorio: "são paulo",
      reclamante: "reclamao",
      ativo: false,
      aprovado: false


    },
    {
      id: 3,
      numeroProcesso: 123445678,
      valor: 50000,
      escritorio: "são paulo",
      reclamante: "reclamao",
      ativo: false,
      aprovado: false

    }];

  constructor() { }

  ngOnInit(): void {
  }

}
