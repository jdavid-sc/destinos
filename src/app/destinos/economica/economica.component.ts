import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-economica',
  templateUrl: './economica.component.html',
  styleUrls: ['./economica.component.css']
})
export class EconomicaComponent implements OnInit {
  destinosClaseEconomica:any[] =[
    { imagen: '/assets/images/1-claseEconomica.jpg', nombre: 'Cartagena', id: 4 },
    { imagen: '/assets/images/2-claseEconomica.jpg', nombre: 'Coveñas', id: 5 },
    { imagen: '/assets/images/3-claseEconomica.jpg', nombre: 'Santa Marta', id: 6 },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  destinoSeleccionado(destinoId:any){
    this.router.navigate(['/formulario', destinoId])
  }
}
