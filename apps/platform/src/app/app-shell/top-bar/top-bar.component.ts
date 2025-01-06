import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { KeyLanguage, LangeCode } from '@tangkinhcode/shared/language';
import { TranslatePipe } from '@tangkinhcode/shared/language';
import { MenuItem } from 'primeng/api';
import { AppStore } from '../../../store/app.store';
import { NgOptimizedImage } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { AuthStore } from '../../auth/store';

@Component({
  selector: 'pk-top-bar',
  imports: [
    MenubarModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    TranslatePipe,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    NgOptimizedImage,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  private readonly appStore = inject(AppStore);
  private readonly authStore = inject(AuthStore);
  private readonly navigator = inject(Router);

  darkMode = this.appStore.darkMode;
  isLogin = computed(() => !!this.appStore.user());
  currentLangCode = computed(() =>
    this.appStore.currentLangCode().toLowerCase()
  );
  currentUser = computed(() => this.appStore.user());

  languages: WritableSignal<
    { label: string; icon: string; code: LangeCode }[]
  > = signal([
    {
      label: KeyLanguage.vietnamese,
      icon: 'vi',
      code: LangeCode.VI,
    },
    {
      label: KeyLanguage.english,
      icon: 'en',
      code: LangeCode.EN,
    },
  ]);

  userActions: WritableSignal<MenuItem[] | undefined> = signal([
    {
      label: KeyLanguage.profile,
      url: '/',
    },
    {
      label: KeyLanguage.signOut,
      url: '/auth',
    },
  ]);

  langKeys = KeyLanguage;

  navToHome() {
    this.navigator.navigate(['/']);
  }
  navToLogin() {
    this.navigator.navigate(['/auth']);
  }

  userActionClick(item: MenuItem) {
    if (item.url) {
      this.navigator.navigateByUrl(item.url);

      if (item.label == KeyLanguage.signOut) {
        this.authStore.logout();
      }
    }
  }

  changeThemMode() {
    this.appStore.changeThemeMode();
  }

  changeLanguage(input: { label: string; icon: string; code: LangeCode }) {
    if (input.code !== this.appStore.currentLangCode()) {
      this.appStore.changeLanguage(input.code == LangeCode.VI);
    }
  }
}
