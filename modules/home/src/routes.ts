import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./feature/home/home.component').then((c) => c.HomeComponent),
  },
] as Routes;
