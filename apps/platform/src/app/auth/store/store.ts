import { inject } from '@angular/core';
import { signalStore } from '@ngrx/signals';
import { withMethods } from '@ngrx/signals';
import { AppStore } from '../../../store/app.store';
import {
  Account,
  OAuthSignInPayload,
  SignInPayload,
  SignUpPayload,
} from '@tangkinhcode/shared/models';
import {
  AuthService,
  LocalStorageService,
} from '@tangkinhcode/shared/services';
import { AppConfig } from '@tangkinhcode/shared/app-config';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { BaseResponse } from 'shared/src/models/base-response.model';

declare const google: any;

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withMethods(
    (
      store,
      router = inject(Router),
      appStore = inject(AppStore),
      appConfig = inject(AppConfig),
      authService = inject(AuthService),
      localStorage = inject(LocalStorageService)
    ) => ({
      signUp(payload: SignUpPayload) {
        return authService.signUp(payload).pipe(tap((res) => {}));
      },

      signIn(payload: SignInPayload) {
        return authService.signIn(payload).pipe(tap(this._handleLoginSuccess));
      },

      fastSignIn() {
        const tokens = localStorage.getToken();
        if (!tokens) return;

        authService
          .fastSignIn(tokens?.accessToken)
          .subscribe((res) => this._handleLoginSuccess(res, false));
      },

      oauthSignIn(payload: OAuthSignInPayload) {
        authService.oauthSignIn(payload).subscribe({
          next: this._handleLoginSuccess,
          error: (e) => {},
        });
      },

      googleSignIn() {
        this._createFakeGoogleWrapper();
      },

      githubSignIn() {
        window.open(appConfig.githubClientUrl());
      },

      logout() {
        localStorage.clearToken();
        appStore.setCurrentUser(null);
        router.navigateByUrl('/');
      },

      _handleCredentialResponse(response: {
        credential: string;
        clientId: string;
      }) {
        if (response?.credential) {
          this.oauthSignIn({
            token: response?.credential,
            credentialType: 'GOOGLE',
          });
        }
      },

      _createFakeGoogleWrapper() {
        const googleLoginWrapper = document.createElement('div');

        googleLoginWrapper.style.display = 'none';
        googleLoginWrapper.classList.add('google-signin-button');

        document.body.appendChild(googleLoginWrapper);

        console.log('appConfig: ', appConfig.googleClientId());
        google.accounts.id.initialize({
          client_id: appConfig.googleClientId(),
          callback: (response: any) => this._handleCredentialResponse(response),
        });

        google.accounts.id.renderButton(googleLoginWrapper, {
          type: 'icon',
          width: '30',
        });

        google.accounts.id.prompt(); // also display the One Tap dialog
        const googleLoginWrapperButton =
          googleLoginWrapper.querySelector<HTMLDivElement>('div[role=button]');

        googleLoginWrapperButton?.click();
      },
      _handleLoginSuccess(res: BaseResponse<Account>, shouldNavigate = true) {
        appStore.setCurrentUser(res.data);

        if (shouldNavigate) {
          router.navigateByUrl('/');
          localStorage.setToken(res.data.tokens);
        }
      },
    })
  )
);
