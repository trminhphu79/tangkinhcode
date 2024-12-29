import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { LangeCode } from '@tangkinhcode/shared/language';
import { rootSelector } from '../app/theme.config';

type AppState = {
  currentLangCode: LangeCode;
  darkMode: boolean;
};

const initialState: AppState = {
  currentLangCode: LangeCode.VI,
  darkMode: true,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    changeThemeMode(): void {
      const element = document.querySelector('html');
      element?.classList.toggle(rootSelector);
      patchState(store, (state) => ({
        darkMode: element?.classList.contains(rootSelector),
      }));
    },
  }))
);
