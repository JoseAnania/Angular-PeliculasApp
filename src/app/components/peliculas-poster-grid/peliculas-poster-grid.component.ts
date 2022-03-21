/* Componente generado para manejar la información del PosterGrid */

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  // generamos el Input para que el html lea el arreglo "movies" (generado en Home.Component)
  @Input() movies: Movie[] | undefined;

  // inyectamos las Rutas
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // creamos un método para acceder a la película al hacer click en el poster
  onMovieClick(movie: Movie) {
    
    this.router.navigate(['/pelicula', movie.id]);
  }

}
