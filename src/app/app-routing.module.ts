import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoComponent } from './processo/processo.component';
import { AppComponent } from './app.component';

const rotas : Routes = [
  { path: '', pathMatch: 'full', component: ProcessoComponent}
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
