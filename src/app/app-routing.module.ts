/* Módulo creado para manejar las Rutas de la app (Home - Películas - Búsqueda) */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

// definimos las rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: '**', redirectTo: '/home'}, // página "comodín" (irá al home si no encuentra la url)
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ), // importamos las rutas creadas arriba
  ],
  exports: [
    RouterModule, // permitimos la exportación de las rutas
  ]
})
export class AppRoutingModule { }
