import { AppShellComponent } from './app-shell/app-shell.component';
import { Routes } from '@angular/router';
import { authGuard } from '@tangkinhcode/shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./new-feed/new-feed.routes').then((r) => r.newfeedRoutes),
      },
      {
        path: 'thanh-chuong-duong',
        loadChildren: () =>
          import('./fortress/fortress.routes').then((c) => c.fortressRoutes),
      },
      {
        path: 'tang-kinh',
        loadChildren: () =>
          import('./scriptures/scriptures.routes').then((c) => c.routes),
      },
      {
        path: 'bang-hoi',
        loadChildren: () =>
          import('./guild/guild.routes').then((c) => c.guildRoutes),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
    canActivate: [authGuard],
  },
];
