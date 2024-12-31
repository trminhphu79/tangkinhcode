import { Routes } from '@angular/router';

export const newfeedRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./new-feed.component').then((c) => c.NewFeedComponent),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./feaures/detail/detail.component').then(
        (c) => c.DetailComponent
      ),
  },
];
