import { AppShellComponent } from './app-shell/app-shell.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'forum',
        loadChildren: () =>
          import('./scriptures/scriptures.routes').then((c) => c.routes),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  },
];
