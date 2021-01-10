import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: any = FormGroup;

  @Input()
  modelo: generoCreacionDTO | undefined;

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()] }]
    });

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarGenero() {
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var nombre = this.form.get('nombre');
    if(nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    if(nombre.hasError('minlength')) {
      return 'La longitud minima es de 3 caracteres';
    }
    if(nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
