/* Servicio creado para manejar la info general de la app */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // parte de la url de la API que es igual
  private baseUrl: string = 'https://api.themoviedb.org/3';

  // propiedad para controlar las páginas
  private carteleraPage = 1;

  // propiedad para saber cuando requerimos info de la API
  public cargando: boolean = false;

  // inyectamos el módulo http (nos permite trabajar con Apis)
  constructor( private http: HttpClient ) { }

  // parte de la url de la API que no es igual (usamos un getter)
  get params(){
    return{
      api_key: '58961407594abee087fb0f7bfc7a779e',
      language: 'es-ES',
      page: this.carteleraPage,
    }
  }

  // método para resetear la Cartelera
  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  // método para hacer la petición "get" a la Api de la cartelera (a "www.themoviedb.org")
  getCartelera(): Observable<Movie[]> {
    
    // si estamos cargando, no hacemos la petición HTTP a la API
    if(this.cargando) {

      // regreso un arreglo vacío
      return of([]);
    }

    // cargamos la info desde la API al cargar la página
    this.cargando = true;

    // llamamos a la API con una petición Get HTTP
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }

  // método para Buscar las Películas
  buscarPeliculas( texto: string ): Observable<Movie[]> {

    // creamos un parámetro para modificar los get params (la page será 1 y agregamos el query) a través de la desenstructuración
    const params = {...this.params, page: 1, query: texto};

    // llamamos a la API con una petición Get HTTP
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map(resp => resp.results)
    )
  }

   // método para hacer la petición "get" a la Api de los detalles (a "www.themoviedb.org")
   getPeliculaDetalle(id: string) {

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
      // manejamos los errores con el pipe para no romper la aplicación (ej. se ingresa un id que no exista en url)
    }).pipe(
      catchError(err => of(undefined))
    )
   }

   // método para hacer la petición "get" a la Api de los créditos (a "www.themoviedb.org")
   getCast(id: string):Observable<Cast[]> {

    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params

      // retornamos sólo los actores y manejamos errores
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    );
   }
}
