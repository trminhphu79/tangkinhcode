import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { rootSelector } from '../../../theme.config';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
import { Router } from '@angular/router';
import { TopBarComponent } from '../../../app-shell/top-bar/top-bar.component';
import { RippleModule } from 'primeng/ripple';
import { AuthStore } from '../../store';
import { ToastModule } from 'primeng/toast';
import { ToastUtil } from 'shared/src/utils';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'pk-sign-in',
  imports: [
    ToastModule,
    CommonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    TooltipModule,
    TranslatePipe,
    TopBarComponent,
    RippleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TranslatePipe],
})
export class SignInComponent {
  protected keyLangs = KeyLanguage;

  private router = inject(Router);
  private authStore = inject(AuthStore);
  private translatePipe = inject(TranslatePipe);
  private toast = inject(ToastUtil);

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', []), // Only used in signup mode
  });

  protected isRegister = signal(false);

  protected actionHint = computed(() =>
    this.isRegister() ? KeyLanguage.signIn : KeyLanguage.signUp
  );
  protected actionBtnLabel = computed(() =>
    this.isRegister() ? KeyLanguage.signUp : KeyLanguage.signIn
  );
  protected questionHint = computed(() =>
    this.isRegister() ? KeyLanguage.youHadAccount : KeyLanguage.youNotHadAccount
  );

  constructor() {
    // side logic changing form control
    effect(() => {
      if (this.isRegister()) {
        this.authForm
          .get('confirmPassword')
          ?.setValidators([Validators.required, Validators.minLength(8)]);
      } else {
        this.authForm.get('confirmPassword')?.clearValidators();
      }
      this.authForm.get('confirmPassword')?.updateValueAndValidity();
    });
  }

  protected changeMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(rootSelector);
  }

  protected changeTab() {
    this.isRegister.set(!this.isRegister());
  }

  protected backHome() {
    this.router.navigateByUrl('/');
  }

  protected submit() {
    for (let control of Object.values(this.authForm.controls)) {
      control.markAsTouched();
    }

    if (!this.authForm.valid) {
      return;
    }

    if (this.isRegister()) {
      this.signUp();
      return;
    }

    this.signIn();
  }

  protected signUp() {
    this.authStore
      .signUp({
        email: this.authForm.controls.email.value?.trim()!,
        password: this.authForm.controls.password.value?.trim()!,
        confirmPassword: this.authForm.controls.confirmPassword.value?.trim()!,
      })
      .subscribe({
        next: (response) => {
          this.toast.showSuccess({
            title: this.translatePipe.transform(this.keyLangs.signUp),
            detail: response?.message,
          });
        },
        error: ({ error }) => {
          this.toast.showError({
            title: this.translatePipe.transform(this.keyLangs.signUp),
            detail: error?.message,
          });
        },
      });
  }

  protected signIn() {
    this.authStore
      .signIn({
        email: this.authForm.controls.email.value?.trim()!,
        password: this.authForm.controls.password.value?.trim()!,
      })
      .subscribe({
        next: (response) => {
          this.toast.showSuccess({
            title: this.translatePipe.transform(this.keyLangs.signIn),
            detail: response?.message,
          });
        },
        error: ({ error }) => {
          this.toast.showError({
            title: this.translatePipe.transform(this.keyLangs.signIn),
            detail: error?.message,
          });
        },
      });
  }

  protected githubSignIn() {
    this.authStore.githubSignIn();
  }

  protected googleSignIn() {
    this.authStore.googleSignIn();
  }
}
