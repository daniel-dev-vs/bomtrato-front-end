import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simOuNao'
})
export class SimOuNaoPipe implements PipeTransform {

  transform(value: boolean): string {

    if(value)
    return 'Sim';

    return 'Não';
  }

}
