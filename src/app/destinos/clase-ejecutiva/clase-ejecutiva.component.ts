import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-ejecutiva',
  templateUrl: './clase-ejecutiva.component.html',
  styleUrls: ['./clase-ejecutiva.component.css']
})
export class ClaseEjecutivaComponent implements OnInit {
  destinosClaseEjecutiva:any[] = [
    {imagen: '/assets/images/1-primeraClase.jpg', nombre: 'san francisco', id: 1},
    {imagen: '/assets/images/2-primeraClase.jpg', nombre: 'washington', id: 2},
    {imagen: '/assets/images/3-primeraClase.jpg', nombre: 'paris', id: 3},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
