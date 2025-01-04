import { inject } from '@angular/core';
import { signalStore } from '@ngrx/signals';
import { withMethods } from '@ngrx/signals';
import { AppStore } from '../../../store/app.store';
import {
  OAuthSignInPayload,
  SignInPayload,
  SignUpPayload,
} from '@tangkinhcode/shared/models';
import { AuthService } from '@tangkinhcode/shared/services';
import { AppConfig } from '@tangkinhcode/shared/app-config';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

declare const google: any;

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withMethods(
    (
      store,
      router = inject(Router),
      appStore = inject(AppStore),
      appConfig = inject(AppConfig),
      authService = inject(AuthService)
    ) => ({
      signUp(payload: SignUpPayload) {
        return authService.signUp(payload).pipe(tap((response) => {}));
      },

      signIn(payload: SignInPayload) {
        return authService.signIn(payload).pipe(tap((response) => {}));
      },

      oauthSignIn(payload: OAuthSignInPayload) {
        authService.oauthSignIn(payload).subscribe((response) => {
          // set to oauth store here
          router.navigateByUrl('/');
        });
      },

      googleSignIn() {
        this._createFakeGoogleWrapper();
      },

      githubSignIn() {
        window.open(appConfig.githubClientUrl());
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

        return googleLoginWrapperButton?.click();
      },
    })
  )
);
