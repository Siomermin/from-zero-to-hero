import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotificactions: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  get termsAndConditions() {
    return this.myForm.controls['termsAndConditions'].value;
  }

  public person = {
    gender: 'F',
    wantNotificactions: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  //ngSubmit
  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;

    console.log(this.person);
  }
}
