import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from '../../store';
import { ToastUtil } from 'shared/src/utils';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
import { SafeHtmlDirective } from 'shared/src/directives/safe-html.directive';
import { AppStore } from 'apps/platform/src/store/app.store';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'pk-verify-signup',
  imports: [
    CommonModule,
    TranslatePipe,
    SafeHtmlDirective,
    ProgressSpinnerModule,
  ],
  templateUrl: './verify-signup.component.html',
  styleUrl: './verify-signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifySignupComponent implements OnInit {
  router = inject(Router);
  toast = inject(ToastUtil);
  authStore = inject(AuthStore);
  appStore = inject(AppStore);
  activatedRoute = inject(ActivatedRoute);
  translatePipe = new TranslatePipe();
  keyLang = KeyLanguage;

  currentToken = signal(null);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.currentToken.set(res.token);
      this.verifyEmail();
    });
  }

  getResendEmailMessage(): string {
    const linkText = this.translatePipe.transform(this.keyLang.resendEmailLink);
    const message = this.translatePipe.transform(
      this.keyLang.resendEmailMessage
    );
    const clickableLink = `<span class="text-primary cursor-pointer underline" data-click>${linkText}</span>`;

    return message.replace('{0}', clickableLink);
  }

  private verifyEmail() {
    if (!this.currentToken()) {
      // this is sign-in case or sign-up case
      // Email is sent so token will be retrieve from email
      // click that link in email so the below code can execute

      if (!this.appStore.user()) {
        // user must be != null in these cases
        // so if null, nav back
        this.router.navigateByUrl('/');
      }
      return;
    }

    this.authStore.verifyEmail(this.currentToken()!).subscribe({
      next: (res) => {
        this.toast.showSuccess({
          title: this.translatePipe.transform(this.keyLang.verifyEmail),
          detail: res.message,
        });
      },
      error: ({ error }) => {
        this.toast.showError({
          title: this.translatePipe.transform(this.keyLang.verifyEmail),
          detail: error.message,
        });
      },
    });
  }

  resendEmail(): void {
    const userEmail = this.appStore.user()?.email;

    if (!userEmail) {
      return;
    }

    this.authStore.sendOtp(userEmail).subscribe({
      next: (res) => {
        this.toast.showSuccess({
          detail: res.message,
        });
      },
      error: ({ error }) => {
        this.toast.showError({
          detail: error.message,
        });
      },
    });
  }
}
