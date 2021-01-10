import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidationErrors {
    return (control: AbstractControl) =>  {
        const valor: string = <string>control.value;

        if(!valor) { return; } 
            
        if(valor.length === 0) {
            return;
        }
        const primeraLetra = valor[0];
        if(primeraLetra !== primeraLetra.toUpperCase()) {
            return {
                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayúscula',
                } 
            }; 
        }

        return;
    }
}