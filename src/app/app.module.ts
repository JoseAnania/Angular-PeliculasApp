import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // importamos el Módulo que nos permite trabajar con Apis
    AppRoutingModule, // importamos el Módulo que maneja las rutas
    ComponentsModule, // importamos el components (importa todos los componentes dentro de la carpeta Components, como el Navbar)
    PagesModule, // importamos el pages (importa todos los componentes dentro de la carpeta Pages, como el Home)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
