import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actor } from '../actores';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: actor;

  @Output()
  submit: EventEmitter<actor> = new EventEmitter<actor>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: ''
    });

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
