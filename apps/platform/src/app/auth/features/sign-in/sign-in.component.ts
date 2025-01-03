import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
import { MessageService } from 'primeng/api';

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
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class SignInComponent {
  protected keyLangs = KeyLanguage;

  private router = inject(Router);
  private authStore = inject(AuthStore);
  private messageService = inject(MessageService);

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
    if (this.isRegister()) {
      this.signUp();
      return;
    }

    this.signIn();
  }

  protected signUp() {
    this.authStore
      .signUp({
        email: 'tangkinhcode231@example.com',
        confirmPassword: '123123@@',
        password: '123123@@',
      })
      .subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Đăng ký',
            detail: response?.message,
          });
        },
        error: ({ error }) => {
          console.log('err: ', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Đăng ký',
            detail: error?.message,
          });
        },
      });
  }

  protected signIn() {
    this.authStore
      .signIn({
        email: 'tangkinhcode@example.com',
        password: 'vodich123',
      })
      .subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Đăng nhập',
            detail: response?.message,
          });
        },
        error: ({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Đăng nhập',
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
