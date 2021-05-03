import { IProcesso } from "./processo.interface";

export class Processo implements IProcesso {
    id: number;
    numeroProcesso: number;
    valor: number;
    escritorio: string;
    reclamante: string;
    ativo: boolean
    aprovado: boolean;

    constructor(){};

    converterFormParaProcesso(processoForm?: any){

      if(processoForm == undefined)
          processoForm = new Processo();

      let valorSemLetras:string;
      let numeroProcessoSemLetras:string;

        valorSemLetras = !isNaN(processoForm.valor) ? processoForm?.valor : processoForm.valor.replace(/\D+/g,'');

        numeroProcessoSemLetras =!isNaN(processoForm?.numeroProcesso) ?
        processoForm.numeroProcesso : processoForm?.numeroProcesso.replace(/\D+/g,'')



      this.id = processoForm.id || 0
      this.numeroProcesso = parseInt(numeroProcessoSemLetras);
      this.valor = parseFloat(valorSemLetras);
      this.aprovado = processoForm.aprovado || false;
      this.ativo = processoForm.ativo || false;
      this.escritorio = processoForm.escritorio  || '';
      this.reclamante = processoForm.reclamante  || '';

      return this;
    }







  }
