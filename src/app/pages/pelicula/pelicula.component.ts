/* Componente creado donde se manejará la info de las Películas */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from "@angular/common";
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  // creamos la propiedad de la película del tipo MovieResponse (interface)
  public pelicula: MovieResponse | undefined;
  
  // creamos una propiedad de un arreglo de Cast
  public cast: Cast[] = [];

  // inyectamos el ActivatedRoute para poder trabajar con las Rutas, el Servicio y el Location 
  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {

    // obtenemos el id de la película seleccionada
    const id = this.activatedRoute.snapshot.params['id'];

    // llamamos los métodos del Servicio (detalle y elenco). NOTA: se podría usar el CombineLatest para cargar juntos los dos métodos del servicio
    this.peliculasService.getPeliculaDetalle(id).subscribe(movie =>{
      if(movie === undefined){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie;
    });

    this.peliculasService.getCast(id).subscribe(cast => {
      
      // si el actor no tiene fotografía no lo mostramos (filter)
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });
  }

  // método del botón Regresar (usaremos Location para saber dónde regresar)
  onRegresar() {
    
    this.location.back();
  }

}
