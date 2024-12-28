import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialState } from './state';
import { computed } from '@angular/core';

export const ScriptureStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    count: computed(() => store.scriptures().length),
  })),
  withMethods((store) => ({
    createScripture() {
      console.log('test');
      patchState(store, {
        scriptures: [
          ...store.scriptures(),
          {
            author: 'Trần Đình Khôi' + new Date().getTime(),
            content: 'Khôi chicken ' + new Date().getTime(),
          },
        ],
      });
    },
    _privateMethod() {
      console.timeLog('privateMethod');
    },
  }))
);
