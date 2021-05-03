import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoComponent } from './processo/processo.component';
import { AppComponent } from './app.component';
import { ProcessoFormComponent } from './processo/processo-form/processo-form.component';

const rotas : Routes = [
  { path: '', pathMatch: 'full', component: ProcessoComponent},
  { path: 'processos', pathMatch: 'full', component: ProcessoComponent},
  { path: 'processo/criar', component: ProcessoFormComponent},
  { path: 'processo/editar/:id', component: ProcessoFormComponent},
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
