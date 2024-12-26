import { MainLayoutComponent } from '@pk/app-shell/feature/main-layout';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pk/home/routes').then((c) => c.default),
      },
    ],
  },
];
