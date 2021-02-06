import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private location: Location, 
              private activatedRoute: ActivatedRoute) { }
  
  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Accion'},
    { id: 2, nombre: 'Drama' },
    { id: 3, nombre: 'Suspenso' }
  ]

  peliculas = [
    { titulo: 'Venom', proximosEstrenos: true, enCines: false, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo: 'Bridgerton', proximosEstrenos: false, enCines: true, generos: [2], poster: 'https://m.media-amazon.com/images/M/MV5BYjIxMzZhMTMtNDQ1Mi00OTMwLTk2M2ItYzA0YmNjNDFlOTdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo: 'Dune', proximosEstrenos: true, enCines: false, generos: [1,3], poster: 'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo: 'Narcos', proximosEstrenos: false, enCines: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg' }
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe( valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.parametrosBusquedaUrl();
    });
  }

  private leerValoresUrl() {
    this.activatedRoute.queryParams.subscribe((params) => {
      
      var objeto: any = {};
      
      if(params.titulo) {
        objeto.titulo = params.titulo;
      }
      if(params.generoId) {
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if(params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    });
  }

  private parametrosBusquedaUrl() {
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);   
    }

    if(valoresFormulario.generoId != '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos) {
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines) {
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  buscarPeliculas(valores: any) {
    if(valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    
    if(valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }
}
