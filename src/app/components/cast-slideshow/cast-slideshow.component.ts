/* Componente creado para el manejo del Slideshow de los Actores en el detalle de las Películas */

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})

// agregamos el AfterViewInit en donde usaremos el Slideshow
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  // recibimos la información mediante el Input
  @Input() cast: Cast[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  // implementamos el AfterViewInit
  ngAfterViewInit(): void {
      const swiper = new Swiper('.swiper',{
        slidesPerView: 5.3,
        freeMode: true,
        spaceBetween: 15
      });
  }

}
