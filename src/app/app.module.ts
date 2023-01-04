import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListadoGenericoComponent } from './modules/utilidades/listado-generico/listado-generico.component';
import {MaterialModule} from './modules/material/material.module';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CrearGeneroComponent } from './modules/generos/crear-genero/crear-genero.component';
import { CrearActorComponent } from './modules/actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './modules/peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './modules/cines/crear-cine/crear-cine.component';
import { ListadoPeliculasComponent } from './modules/peliculas/listado-peliculas/listado-peliculas.component';
import { RatingComponent } from './modules/utilidades/rating/rating.component';
import { IndiceGenerosComponent } from './modules/generos/indice-generos/indice-generos.component';
import { IndiceActoresComponent } from './modules/actores/indice-actores/indice-actores.component';
import { IndiceCinesComponent } from './modules/cines/indice-cines/indice-cines.component';
import { MenuComponent } from './modules/shared/menu/menu.component';
import { EditarActorComponent } from './modules/actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './modules/generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './modules/cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './modules/peliculas/editar-pelicula/editar-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
