/* Componente creado para el manejo del Navbar */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // inyectamos el módulo de Rutas
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // creamos el método para Buscar una Película
  buscarPelicula( texto: string ) {
    
    // propiedad para borrar los espacios del texto en el Buscador
    texto = texto.trim();

    // si el texto en el buscador es "vacío" 
    if(texto.length === 0) {
      return;
    }

    // si pasa la validación navegamos a la película
    this.router.navigate(['/buscar', texto]);


  }
}
