/* Componente creado para el manejo del Slideshow */
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper, { Navigation } from 'swiper';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

// agregamos el AfterViewInit (para el slideshow)
export class SlideshowComponent implements OnInit, AfterViewInit {

  // generamos el Input para que el html lea el arreglo "movies" (generado en Home.Component)
  @Input() movies: Movie[] | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    // agregamos el códico copiado según documentación de swiperjs.com
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });  
  }
  ngOnInit(): void {
  }

}
