/* Módulo creado para manejar las diferentes páginas del proyecto (Home - Búsqueda - Películas) */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule, // importamos el Component (importa todos los componentes dentro de la carpeta Components, como el Slideshow)
    PipesModule, // importamos los Pipes personalizados
    RatingModule, // importamos el Rating (para poder poner las estrellas en el detalle)
  ]
})
export class PagesModule { }
