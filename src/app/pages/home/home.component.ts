/* Componente creado donde se manejará la info del Home */

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  // creamos un arreglo de las películas de Cartelera inicializado vacío
  public movies: Movie[] = [];
  // creamos un arreglo de las películas de SlideShow inicializado vacío
  public moviesSlideshow: Movie[] = [];

  // usamos el decorador HostListener para escuchar cuando llegamos al final de la página (para usar el InfiniteScroll)
  @HostListener('window: scroll', ['$event'])
  onScroll() {
    
    const pos = document.documentElement.scrollTop + 1300;
    const max = document.documentElement.scrollHeight;

    if(pos > max ) {

      // si estamos cargando info desde la API, no sigue...
      if( this.peliculasService.cargando ) {return} 

      this.peliculasService.getCartelera().subscribe( movies =>{
        this.movies.push(...movies);
      });
    }

  }

  // inyectamos el Servicio
  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    // llamamos el método que consume la Api 
    this.peliculasService.getCartelera()
      .subscribe( movies => {
        //llenamos el arreglo
        this.movies = movies;
        this.moviesSlideshow = this.movies;
      });
  }

  // llamamos al reteador de Cartelera
  ngOnDestroy(): void {

    this.peliculasService.resetCarteleraPage();
  }

}
