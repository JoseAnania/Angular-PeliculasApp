/* Módulo creado para manejar las importaciones (para no usar el app.module.ts) */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
  ],
  // exportamos los Componentes que usaremos fuera de este módulo
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // importamos el RouterModule para poder utilizar las rutas 
    RatingModule, // importamos el Modulo que me permite trabajar con el rating (según doc de www.npmjs.com)
    PipesModule, // importamos el Módulo de los Pipes personalizados para poder usarlos
  ]
})
export class ComponentsModule { }
