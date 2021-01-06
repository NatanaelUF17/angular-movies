import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
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
          precio: 1399.99
        },
        { 
          titulo: 'Tiny Pretty Things',
          fechaLanzamiento: new Date(),
          precio: 1199.99
        },
        { 
          titulo: 'Black Panther',
          fechaLanzamiento: new Date(),
          precio: 1599.99
        },
        { 
          titulo: 'Venom',
          fechaLanzamiento: new Date(),
          precio: 1399.99
        }
      ];
    }, 500);

    setTimeout(() => {
      this.peliculasFuturosEstrenos = [
        { 
          titulo: 'The Amazing Spiderman - Far From Home',
          fechaLanzamiento: new Date(),
          precio: 1399.99
        },
        { 
          titulo: 'Advengers End Game',
          fechaLanzamiento: new Date(),
          precio: 1199.99
        },
        { 
          titulo: 'Rambo 5',
          fechaLanzamiento: new Date(),
          precio: 1599.99
        },
      ];
    }, 500);
  }
  
  manejadorRated(voto: number): void {
    alert(voto);
  }
}
