import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-primera-clase',
  templateUrl: './primera-clase.component.html',
  styleUrls: ['./primera-clase.component.css']
})
export class PrimeraClaseComponent implements OnInit {
  presupuesto:number
  destinosPrimeraClase:any[] = [
    { imagen: '/assets/images/1-primeraClase.jpg',   precio: 10000, nombre: 'san francisco', id: 1},
    { imagen: '/assets/images/2-primeraClase.jpg',   precio: 8000, nombre: 'washington',    id: 2},
    { imagen: '/assets/images/3-primeraClase.jpg',   precio: 7000, nombre: 'paris',         id: 3},
    { imagen: '/assets/images/1-claseEconomica.jpg', precio: 5000, nombre: 'Cartagena',     id: 4 },
    { imagen: '/assets/images/2-claseEconomica.jpg', precio: 3500,  nombre: 'Coveñas',       id: 5 },
    { imagen: '/assets/images/3-claseEconomica.jpg', precio: 2800, nombre: 'Santa Marta',   id: 6 },
  ]
  constructor(private router: Router, private presupuestoService: PresupuestoService) {
    this.presupuesto = 0
   }

  ngOnInit(): void {
    this.presupuesto = this.presupuestoService.presupuesto
    console.log(this.presupuesto)
  }
  destinoSeleccionado(destinoId:any){
    this.router.navigate(['/formulario', destinoId])
  }

}
