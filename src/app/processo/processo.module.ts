import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpClientModule }  from '@angular/common/http'


import { ProcessoComponent } from './processo.component';
//import { ProcessosService } from './shared/processos.service';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
//import { CheckBoxParaSimOuNAoPipe } from './shared/check-box-para-sim-ou-nao.pipe';
import { TituloComponent } from '../titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//registerLocaleData(localePt, 'pt');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,  
  ],
  declarations: [
    ProcessoComponent,
    ProcessoFormComponent,
    TituloComponent
   // CheckBoxParaSimOuNAoPipe,
  ],
  exports: [
    ProcessoComponent
  ],
  providers: [
    //ProcessosService
  
  ]
})
export class ProcessoModule { }
