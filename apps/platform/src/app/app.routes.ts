import { AppShellComponent } from './app-shell/app-shell.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'thanh-chuong-duong',
        pathMatch: 'full',
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
  },
];
