import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActorComponent } from './modules/actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './modules/actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './modules/actores/indice-actores/indice-actores.component';

import { CrearCineComponent } from './modules/cines/crear-cine/crear-cine.component';
import { EditarCineComponent } from './modules/cines/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './modules/cines/indice-cines/indice-cines.component';

import { CrearGeneroComponent } from './modules/generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './modules/generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './modules/generos/indice-generos/indice-generos.component';

import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CrearPeliculaComponent } from './modules/peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './modules/peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './modules/peliculas/filtro-peliculas/filtro-peliculas.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path: 'generos', component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGeneroComponent},
  {path: 'generos/editar/:id', component: EditarGeneroComponent},
  {path: 'actores', component: IndiceActoresComponent},
  {path: 'actores/crear', component: CrearActorComponent},
  {path: 'actores/editar/:id', component: EditarActorComponent},
  {path: 'cines', component: IndiceCinesComponent},
  {path: 'cines/crear', component: CrearCineComponent},
  {path: 'cines/editar/:id', component: EditarCineComponent},
  {path: 'peliculas/crear', component: CrearPeliculaComponent},
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
