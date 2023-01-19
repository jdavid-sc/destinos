import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { PrimeraClaseComponent } from './destinos/primera-clase/primera-clase.component';
import { ClaseEjecutivaComponent } from './destinos/clase-ejecutiva/clase-ejecutiva.component';
import { EconomicaComponent } from './destinos/economica/economica.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent,
    PrimeraClaseComponent,
    ClaseEjecutivaComponent,
    EconomicaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
