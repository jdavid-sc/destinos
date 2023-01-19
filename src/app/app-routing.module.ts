
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { PrimeraClaseComponent } from './destinos/primera-clase/primera-clase.component';
import { ClaseEjecutivaComponent } from './destinos/clase-ejecutiva/clase-ejecutiva.component';
import { EconomicaComponent } from './destinos/economica/economica.component';


const routes: Routes = [
  { path: '', redirectTo: '/presupuesto', pathMatch: 'full'},
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'primeraClase', component: PrimeraClaseComponent },
  { path: 'claseEjecutiva', component: ClaseEjecutivaComponent },
  { path: 'economica', component: EconomicaComponent},
  { path: '**', redirectTo: '/presupuesto', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
