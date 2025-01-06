import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/sign-in/sign-in.component').then(
        (c) => c.SignInComponent
      ),
  },
  {
    path: 'redirect',
    loadComponent: () =>
      import('./features/oauth-redirect/oauth-redirect.component').then(
        (c) => c.OauthRedirectComponent
      ),
  },
  {
    path: 'verify-email',
    loadComponent: () =>
      import('./features/verify-signup/verify-signup.component').then(
        (c) => c.VerifySignupComponent
      ),
  },
];
