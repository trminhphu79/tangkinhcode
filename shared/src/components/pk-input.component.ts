import {
  AfterContentInit,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'pk-input',
  template: `
    <p-iconfield class="border-none outline-none">
      <p-inputicon [styleClass]="iconClass"></p-inputicon>
      <input
        [class]="inputClass"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
    </p-iconfield>
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  imports: [IconFieldModule, InputIconModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PkInputComponent),
      multi: true,
    },
  ],
})
export class PkInputComponent implements ControlValueAccessor, Validator {
  @ContentChild(TemplateRef) content!: TemplateRef<any>;
  @Input() iconClass = '';
  @Input() inputClass =
    'text-color placeholder-xs border-min w-full py-2 text-xs border-solid transition-duration-200 focus:border-primary border-round-md px-2 outline-none'; // Default input class
  @Input() type = 'text';
  @Input() placeholder = '';
  value = '';

  private onChange: (value?: string) => void = () => {};
  onTouched: () => void = () => {};

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(target.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disabled state
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null; // No additional validation here
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
