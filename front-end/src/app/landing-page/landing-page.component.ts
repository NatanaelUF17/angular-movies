import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  titles = { 
    enCines: 'En cine',
    futurosEstrenos: 'Futuros Estrenos'
  };

  peliculasEnCine: any[] = [];
  peliculasFuturosEstrenos: any[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        { 
          titulo: 'The Amazing Spiderman',
          fechaLanzamiento: new Date(),
          precio: 1399.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Tiny Pretty Things',
          fechaLanzamiento: new Date(),
          precio: 1199.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BZmY0OGIxODUtMzc2NS00OTlmLWEwZTctYzVmNmQzYjE3Njc5XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UY268_CR5,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Black Panther',
          fechaLanzamiento: new Date(),
          precio: 1599.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 1399.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }
      ];
    }, 500);

    setTimeout(() => {
      this.peliculasFuturosEstrenos = [
        { 
          titulo: 'Gambito de Dama',
          fechaLanzamiento: new Date(),
          precio: 1399.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Advengers End Game',
          fechaLanzamiento: new Date(),
          precio: 1199.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Rambo Last Blood',
          fechaLanzamiento: new Date(),
          precio: 1599.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        { 
          titulo: 'Vikingos',
          fechaLanzamiento: new Date(),
          precio: 999.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
      ];
    }, 500);
  }
  

}
