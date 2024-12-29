import { Routes } from '@angular/router';

export const fortressRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./fortress.component').then((c) => c.FortressComponent),
  },
];
