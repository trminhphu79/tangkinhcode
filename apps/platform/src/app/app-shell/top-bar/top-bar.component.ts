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
import { AppStore } from 'apps/platform/src/store/app.store';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'pk-top-bar',
  imports: [
    MenubarModule,
    ButtonModule,
    MenuModule,
    TranslatePipe,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    NgOptimizedImage
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  private readonly appStore = inject(AppStore);
  private readonly navigator = inject(Router);

  darkMode = this.appStore.darkMode;
  currentLangCode = computed(() =>
    this.appStore.currentLangCode().toLowerCase()
  );

  languages: WritableSignal<
    { label: string; icon: string; code: LangeCode }[]
  > = signal([
    {
      label: 'Vietnamese',
      icon: 'vi',
      code: LangeCode.VI,
    },
    {
      label: 'English',
      icon: 'en',
      code: LangeCode.EN,
    },
  ]);

  userActions: WritableSignal<MenuItem[] | undefined> = signal([
    {
      label: 'Đăng ký',
      url: '/auth',
    },
    {
      label: 'Đăng xuất',
      url: '',
    },
  ]);

  langKeys = KeyLanguage;

  ngOnInit() {}

  navToHome() {
    this.navigator.navigate(['/']);
  }
  navToLogin() {
    this.navigator.navigate(['/auth']);
  }

  userActionClick(item: MenuItem) {
    console.log('userActionClick:', item);
    if (item.url) {
      this.navigator.navigateByUrl(item.url);
    }
  }

  changeThemMode() {
    this.appStore.changeThemeMode();
  }

  changeLanguage(input: { label: string; icon: string; code: LangeCode }) {
    this.appStore.changeLanguage(input.code == LangeCode.VI);
  }
}
