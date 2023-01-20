import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  generos= [
    {id: 1, nombre: 'Drama'},
    {id:2,nombre:'Accion'},
    {id:3,nombre:'Comedia'}
  ];

  peliculas = [
    {titulo: 'Spider-Man: FarFrom Home', enCines: false,proximosEstrenos: true,generos:[1,2],poster:'https://m.media-amazon.com/images/M/MV5BNTY2ZWI3OGEtMTM2Zi00YTViLWJjMDUtMWI4ZTYxYjU5NjIxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg'},
    {titulo: 'Moana', enCines: true,proximosEstrenos: false,generos:[3],poster:'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UX1000_.jpg'},
    {titulo: 'Inception', enCines: false,proximosEstrenos: false,generos:[1,3],poster:'https://m.media-amazon.com/images/M/MV5BMmYxYWQ2MmYtNWFmYi00Mjg4LTliMTMtMzFmMDQ4YTU1OWUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjkyMTM0ODY@._V1_FMjpg_UX1000_.jpg'}
  ]

  peliculasOriginal = this.peliculas;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    });

    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores)
    })
  }

  buscarPeliculas(valores: any){
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo)!== -1);
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId)!== -1);
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
      
    }
  }

  limpiar(){

  }
}
