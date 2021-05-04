import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route }  from '@angular/router';
import { HttpClientModule }  from '@angular/common/http'


import { ProcessoComponent } from './processo.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
//import { CheckBoxParaSimOuNAoPipe } from './shared/check-box-para-sim-ou-nao.pipe';
import { TituloComponent } from '../titulo/titulo.component';
import { ProcessoService } from './shared/processo.service';
import { AppRoutingModule } from '../app-routing.module';
import { SimOuNaoPipe } from './shared/sim-ou-nao.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';

//registerLocaleData(localePt, 'pt');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    JwPaginationModule

  ],
  declarations: [
    ProcessoComponent,
    ProcessoFormComponent,
    TituloComponent,
    SimOuNaoPipe,

   // CheckBoxParaSimOuNAoPipe,
  ],
  exports: [
    ProcessoComponent
  ],
  providers: [
    ProcessoService
  ],

})
export class ProcessoModule { }
