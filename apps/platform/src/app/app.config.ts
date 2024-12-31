import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { themeConfigs } from './theme.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { of, pipe, tap } from 'rxjs';
import { AppConfig } from './app-config.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG(themeConfigs),
    provideAnimations(),
    provideHttpClient(),
    provideAppInitializer(() => {
      const appConfig = inject(AppConfig);
      appConfig.setConfig(environment);
      return Promise.resolve();
    }),
  ],
};
