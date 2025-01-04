import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passRegex = /\d/;

export const passwordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string | null;

    if (!value) {
      return { required: true };
    }

    if (value.length < 8) {
      return { minLength: true };
    }

    const hasNumber = passRegex.test(value);

    if (!hasNumber) {
      return { pattern: true };
    }

    return null;
  };
};

export function confirmPasswordValidator(
  passwordField: string,
  confirmPasswordField: string,
  form: AbstractControl
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = form.get(passwordField)?.value;
    const confirmPassword = control.value;

    const error = { passwordMisMatch: true };

    if (password !== confirmPassword) {
      control.get(confirmPasswordField)?.setErrors(error);

      console.log(control.get(confirmPasswordField));
      return error;
    }

    return null;
  };
}
