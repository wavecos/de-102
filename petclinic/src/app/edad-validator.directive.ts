import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: '[edadValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EdadValidatorDirective, multi: true }]
})
export class EdadValidatorDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): { [key: string]: any } {
    let edad = control.value;

    return edad < 1 || edad > 50 ? { "edadValidator": true } : null;
  }

}
