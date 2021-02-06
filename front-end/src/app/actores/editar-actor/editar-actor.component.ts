import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actor } from '../actores';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actor = { nombre: 'Natanael', fechaNacimiento: new Date() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //salert(params.id);
    });
  }

  guardarCambios(actor: actor) {
    console.log(actor);
  }

}
