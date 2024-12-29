import { AppShellComponent } from './app-shell/app-shell.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
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
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
  },
];
