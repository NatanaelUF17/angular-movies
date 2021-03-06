import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  modelo: generoCreacionDTO = { nombre: 'Drama' };

  ngOnInit(): void {
  }

  guardarGenero(genero: generoCreacionDTO) {
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
