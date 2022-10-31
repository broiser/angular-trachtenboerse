import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'mat-input-error',
  templateUrl: './mat-input-error.component.html',
})
export class MatInputComponent {
  @Input('formControl')
  formControl: AbstractControl<any, any>;

  constructor() {}
}
