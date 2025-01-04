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
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppConfig } from '@tangkinhcode/shared/app-config';
import { MessageService } from 'primeng/api';
import { loggingInterceptor } from '@tangkinhcode/shared/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG(themeConfigs),
    provideAnimations(),
    provideHttpClient(withInterceptors([loggingInterceptor])),
    provideAppInitializer(() => {
      const appConfig = inject(AppConfig);
      appConfig.setConfig(environment);
      return Promise.resolve();
    }),
    MessageService,
  ],
};
