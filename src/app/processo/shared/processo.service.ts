import { Injectable } from '@angular/core';
import { Processo } from './processo';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProcesso } from './processo.interface';

@Injectable()
export class ProcessoService {

  private url: string = `${environment.baseUrl}/api/processo`;


  private _getHeaders():HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return header;
 }

private _options;


  constructor(private http: HttpClient) {

    this._options  = {
      headers: this._getHeaders()
    }
   }

  getProcessos(){
    return this.http.get<Processo[]>(this.url)
  }

  getProcesso(id){
    return this.http.get(this.getProcessoUrl(id))
  }

  addProcesso(processo : Processo){
    return this.http.post<String>(this.url, JSON.stringify(processo), this._options)

  }

  updateProcesso(processo : Processo){

    return this.http.put(this.getProcessoUrl(processo.id), JSON.stringify(processo), this._options)

  }

  deleteProcesso(id){
    return this.http.delete<String>(this.getProcessoUrl(id))

  }

  private getProcessoUrl(id){
    return this.url + "/" + id;
  }
}
