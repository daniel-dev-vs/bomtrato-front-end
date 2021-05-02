import { Routes, RouterModule } from '@angular/router';

import { ProcessoComponent } from './processo.component';
import {ProcessoFormComponent} from "./processo-form/processo-form.component";

const processoRoutes: Routes = [
  { path: 'processos', component: ProcessoComponent, pathMatch: 'full' },
  { path: 'processo/new', component: ProcessoFormComponent},
  { path: 'processo/:id', component: ProcessoFormComponent}
];

export const ProcessoRouting = RouterModule.forChild(processoRoutes);
