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
import {
  authTokenInterceptor,
  loggingInterceptor,
} from '@tangkinhcode/shared/interceptors';
import { AuthStore } from './auth/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG(themeConfigs),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([loggingInterceptor, authTokenInterceptor])
    ),
    provideAppInitializer(() => {
      const appConfig = inject(AppConfig);
      const authStore = inject(AuthStore);
      appConfig.setConfig(environment);
      authStore.fastSignIn();
      return Promise.resolve();
    }),
    MessageService,
  ],
};
