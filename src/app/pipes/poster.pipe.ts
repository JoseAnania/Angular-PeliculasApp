/* Pipe personalizado para mostrar el Poster de no imagen cuando no exista poster en la API */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  // personalizamos el Pipe
  transform(poster: string): string {

    // si el poster existe o no retornamos la imagen o la no imagen
    if (poster) {
      return `https://image.tmdb.org/t/p/w500${poster}`;
    } else {
      return './assets/no-image.jpg';
    }
  }
}
