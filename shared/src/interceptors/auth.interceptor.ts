import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService, AuthService } from '../services';
import { catchError, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';

let isRefreshing = false; // Tracks ongoing token refresh attempts

export const authTokenInterceptor: HttpInterceptorFn = (
  req,
  next: HttpHandlerFn
) => {
  const localStorageService = inject(LocalStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = localStorageService.getToken();

  const clonedRequest = req.clone({
    setHeaders: token ? { Authorization: `Bearer ${token.accessToken}` } : {},
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status === HttpStatusCode.Unauthorized &&
        token?.refreshToken &&
        !isRefreshing
      ) {
        isRefreshing = true; // Set the flag to avoid multiple refresh attempts
        return authService.refreshToken(token.refreshToken).pipe(
          switchMap((res) => {
            isRefreshing = false; // Reset the flag after refresh completes
            localStorageService.setToken(res.data); // Save the new token

            // Retry the original request with the new access token
            const retryRequest = req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.data.accessToken}`,
              },
            });
            return next(retryRequest);
          }),
          catchError((refreshError) => {
            isRefreshing = false; // Reset the flag on refresh failure

            // Check if refresh token is expired or invalid
            if (
              refreshError.status === HttpStatusCode.Unauthorized ||
              refreshError.status === HttpStatusCode.Forbidden
            ) {
              localStorageService.clearToken();
              router.navigateByUrl('/auth'); // Redirect to login page
            }

            return throwError(() => refreshError);
          })
        );
      }

      // If the error is not 401 or refresh has already failed, propagate the error
      return throwError(() => error);
    })
  );
};
