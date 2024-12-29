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
];
