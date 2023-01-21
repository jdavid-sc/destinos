
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { PrimeraClaseComponent } from './destinos/primera-clase/primera-clase.component';
import { ClaseEjecutivaComponent } from './destinos/clase-ejecutiva/clase-ejecutiva.component';
import { EconomicaComponent } from './destinos/economica/economica.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: '', redirectTo: '/presupuesto', pathMatch: 'full'},
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'destinos', component: PrimeraClaseComponent },
  { path: 'formulario/:id', component: FormularioComponent },
  { path: '**', redirectTo: '/presupuesto', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
