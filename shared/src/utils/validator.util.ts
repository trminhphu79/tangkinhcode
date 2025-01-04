import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passRegex = /\d/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const emailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string | null;

    if (!value) {
      return { required: true };
    }

    const isEmail = emailRegex.test(value);

    if (!isEmail) {
      return { email: true };
    }

    return null;
  };
};

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
  compareWith: string,
  form: AbstractControl
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = form.get(compareWith)?.value;
    const confirmPassword = control.value;

    const error = { passwordMisMatch: true };

    if (password !== confirmPassword) {
      control.setErrors(error);
      return error;
    }

    return null;
  };
}
