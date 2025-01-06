import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services';

export const authGuard: CanActivateFn = () => {
  const localStorage = inject(LocalStorageService);
  const router = inject(Router);

  if (localStorage.getToken()) {
    return router.parseUrl('/');
  }
  return true;
};
