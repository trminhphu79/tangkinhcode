import { Routes } from '@angular/router';

export const guildRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./guild.component').then((c) => c.GuildComponent),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./features/detail/detail.component').then(
        (c) => c.GuildDetailComponent
      ),
  },
];
