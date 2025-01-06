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
import { PkInputComponent } from 'shared/src/components/pk-input.component';
import {
  confirmPasswordValidator,
  emailValidator,
  passwordValidator,
  ToastUtil,
} from 'shared/src/utils';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppStore } from 'apps/platform/src/store/app.store';

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
    PkInputComponent,
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
  private appstore = inject(AppStore);
  private translatePipe = inject(TranslatePipe);
  private toast = inject(ToastUtil);

  authForm = new FormGroup({
    email: new FormControl('', emailValidator()),
    password: new FormControl('', passwordValidator()),
    confirmPassword: new FormControl(''), // Only used in signup mode
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
        this.authForm.controls.confirmPassword.setValidators(
          confirmPasswordValidator('password', this.authForm)
        );
      } else {
        this.authForm.controls.confirmPassword.clearValidators();
      }
      this.authForm.controls.confirmPassword.updateValueAndValidity();
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
    this.authForm.markAllAsTouched();

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
        email: this.authForm.value.email?.trim()!,
        password: this.authForm.value.password?.trim()!,
        confirmPassword: this.authForm.value.confirmPassword?.trim()!,
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
        email: this.authForm.value.email?.trim()!,
        password: this.authForm.value.password?.trim()!,
      })
      .subscribe({
        next: (response) => {
          if (!this.appstore.user()?.isVerify) return;

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
