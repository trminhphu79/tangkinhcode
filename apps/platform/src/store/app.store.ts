import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { LangeCode, TranslateService } from '@tangkinhcode/shared/language';
import { rootSelector } from '../app/theme.config';
import { inject } from '@angular/core';
import { Account } from '@tangkinhcode/shared/models';

type AppState = {
  currentLangCode: LangeCode;
  darkMode: boolean;
  user: Account | null;
};

const initialState: AppState = {
  currentLangCode: LangeCode.VI,
  darkMode: true,
  user: null,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, translate = inject(TranslateService)) => ({
    changeThemeMode(): void {
      const element = document.querySelector('html');
      element?.classList.toggle(rootSelector);
      patchState(store, (state) =>
        this._patchDarkMode(element?.classList.contains(rootSelector))
      );
    },
    changeLanguage(isVietnamese: boolean): void {
      const newCode = isVietnamese ? LangeCode.VI : LangeCode.EN;

      translate.setCurrentLangCode(newCode);
      patchState(store, (state) => this._patchLanguage(newCode));
    },
    setCurrentUser(user: Account | null) {
      patchState(store, (state) => this._patchUser(user));
    },

    _patchDarkMode(isDark: boolean | undefined) {
      return {
        darkMode: isDark ?? false,
      };
    },
    _patchLanguage(langCode: LangeCode | undefined) {
      return {
        currentLangCode: langCode,
      };
    },
    _patchUser(user: Account | null) {
      return {
        user: user,
      };
    },
  }))
);
