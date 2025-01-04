import {
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (
  req,
  next: HttpHandlerFn
) => {
  console.log('%c[API Request]', 'color: blue; font-weight: bold;', req);

  const startTime = Date.now();

  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        // HttpResponse event
        const elapsedTime = Date.now() - startTime;
        console.log('%c[API Response]', 'color: green; font-weight: bold;', {
          url: req.url,
          status: event['status'],
          elapsedTime: `${elapsedTime} ms`,
          body: event['body'],
        });
      }
    }),
    catchError((error) => {
      console.error('%c[API Error]', 'color: red; font-weight: bold;', {
        url: req.url,
        status: error.status,
        message: error.message,
      });
      throw error;
    })
  );
};
