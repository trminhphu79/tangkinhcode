import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  OnDestroy,
  computed,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from '../../store';
import { ToastUtil } from 'shared/src/utils';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
import { SafeHtmlDirective } from 'shared/src/directives/safe-html.directive';
import { AppStore } from 'apps/platform/src/store/app.store';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

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
  providers: [DatePipe],
})
export class VerifySignupComponent implements OnInit, OnDestroy {
  toast = inject(ToastUtil);
  router = inject(Router);
  authStore = inject(AuthStore);
  appStore = inject(AppStore);
  activatedRoute = inject(ActivatedRoute);
  translatePipe = new TranslatePipe();
  datePipe = inject(DatePipe);
  keyLang = KeyLanguage;
  private timerSubscription?: Subscription;

  currentToken = signal(null);
  remainingTime = signal(0);
  getResendWaitMessage = computed(() => {
    const formattedTime = this.datePipe.transform(
      this.remainingTime() * 1000,
      'mm:ss'
    );
    const message = this.translatePipe.transform(this.keyLang.resendEmailWait);
    return message.replace('{0}', formattedTime || '');
  });

  resendEmail = () => {
    if (this.remainingTime() > 0) {
      return;
    }

    const userEmail = this.appStore.user()?.email;
    if (!userEmail) {
      return;
    }

    this.authStore.sendOtp(userEmail).subscribe({
      next: (res) => {
        this.toast.showSuccess({
          detail: res.message,
        });
        this.startResendTimer();
      },
      error: ({ error }) => {
        this.toast.showError({
          detail: error.message,
        });
      },
    });
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.currentToken.set(res.token);
      this.verifyEmail();
    });

    if (!this.currentToken()) {
      this.startResendTimer();
    }
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  getResendEmailMessage(): string {
    const linkText = this.translatePipe.transform(this.keyLang.resendEmailLink);
    const message = this.translatePipe.transform(
      this.keyLang.resendEmailMessage
    );
    const clickableLink = `<span class="text-primary cursor-pointer underline" data-click>${linkText}</span>`;

    return message.replace('{0}', clickableLink);
  }

  private startResendTimer(): void {
    this.remainingTime.set(20); // 3 minutes in seconds
    this.timerSubscription = interval(1000)
      .pipe(take(181))
      .subscribe(() => {
        if (this.remainingTime() > 0) {
          this.remainingTime.update((time) => time - 1);
        }
      });
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
        this.router.navigateByUrl('/');
        this.toast.showError({
          title: this.translatePipe.transform(this.keyLang.verifyEmail),
          detail: error.message,
        });
      },
    });
  }
}
