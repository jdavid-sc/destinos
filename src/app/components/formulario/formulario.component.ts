import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  destinoSeleccionado:any;
  destinosPrimeraClase:any[] = [
    { imagen: '/assets/images/1-primeraClase.jpg',   nombre: 'san francisco', id: 1},
    { imagen: '/assets/images/2-primeraClase.jpg',   nombre: 'washington',    id: 2},
    { imagen: '/assets/images/3-primeraClase.jpg',   nombre: 'paris',         id: 3},
    { imagen: '/assets/images/1-claseEconomica.jpg', nombre: 'Cartagena',     id: 4 },
    { imagen: '/assets/images/2-claseEconomica.jpg', nombre: 'Coveñas',       id: 5 },
    { imagen: '/assets/images/3-claseEconomica.jpg', nombre: 'Santa Marta',   id: 6 },
  ]

  constructor(private activatedRouter: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(parametro =>{
      this.destinoSeleccionado = this.destinosPrimeraClase.find(destino => destino.id == parametro['id'] )
      console.log(this.destinoSeleccionado)
    })
  }

}
