/* Módulo creado para importar los Pipes de la aplicación */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';



@NgModule({
  declarations: [
    PosterPipe
  ],
  // exportamos lo que usaremos fuera del Módulo
  exports: [
    PosterPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
