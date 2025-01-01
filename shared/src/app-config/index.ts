import {
  getState,
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';

export const AppConfig = signalStore(
  { providedIn: 'root' },
  withState({
    production: true,
    apiUrl: '',
    googleClientId: '',
    githubClientUrl: '',
  }),
  withMethods((store) => ({
    setConfig(config: any) {
      patchState(store, { ...config });
      console.log('store:', getState(store));
    },
  }))
);
