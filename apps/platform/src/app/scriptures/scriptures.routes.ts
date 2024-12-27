import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./scriptures.component').then((c) => c.ScripturesComponent),
    loadChildren: () =>
      Promise.resolve([
        {
          path: ':slug',
          loadComponent: () =>
            import('./features/detail.component').then(
              (c) => c.DetailComponent
            ),
        },
      ]),
  },
];
