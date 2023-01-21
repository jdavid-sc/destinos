import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  presupuesto:any;
  cantidad:boolean = false;

  constructor(private presupuestoService: PresupuestoService, private router: Router) {
    this.presupuesto = this.presupuestoService.presupuesto
  }

  ngOnInit(): void {
  }
  verOfertasDeViaje(){
    if(this.presupuesto){
      this.router.navigate(['/destinos'])
    }
   // if (this.presupuesto >= 8000 ){
   //   this.router.navigate(['/primeraClase'])
   // }else if(this.presupuesto >= 4500){
   //   this.router.navigate(['/claseEjecutiva'])
   // }else if(this.presupuesto < 4500  ){
   //   this.router.navigate(['/economica'])
   // }
  }
}
