/* Componente creado donde se manejará la info de la Búsqueda */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  // propiedad para buscar
  public texto: string = '';

  // propeidad de las Peliculas (arreglo del tipo Movie)
  public movies: Movie[] = [];

  // inyectamos el activador de rutas y el servicio
  constructor( private activateRoute: ActivatedRoute,
               private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    // nos suscribimos
    this.activateRoute.params.subscribe( params => {

      this.texto = params['texto'];

      // llamamos al Servicio
      this.peliculasService.buscarPeliculas(params['texto']).subscribe(movies => {
        this.movies = movies;
      })
    });
  }

}
