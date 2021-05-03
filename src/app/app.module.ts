import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProcessoComponent } from './processo/processo.component';
import { TituloComponent } from './titulo/titulo.component';
import { ProcessoFormComponent } from './processo/processo-form/processo-form.component';
import { ProcessoModule } from './processo/processo.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProcessoModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,

  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
