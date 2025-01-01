import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import {
  KeyLanguage,
  LangeCode,
  TranslatePipe,
} from '@tangkinhcode/shared/language';
import { Router } from '@angular/router';
import { AppStore } from '../../../store/app.store';

type SideBarMenuItem = {
  id: number;
  label: string;
  icon: string;
  route: string;
  isActive: boolean;
};
type SideBarGroup = {
  title: string;
  child: SideBarMenuItem[];
};

@Component({
  selector: 'pk-side-bar',
  imports: [
    PanelMenuModule,
    DividerModule,
    AvatarModule,
    ButtonModule,
    TranslatePipe,
    ToggleSwitchModule,
    FormsModule,
    RippleModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  readonly appStore = inject(AppStore);
  langKeys = KeyLanguage;
  sideBarGroup: SideBarGroup[] = [];

  darkMode = this.appStore.darkMode;
  isVietnamese = signal(false);
  selectedMenu = signal<SideBarMenuItem | null>(null);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isVietnamese.set(this.appStore.currentLangCode() == LangeCode.VI);

    const guildMenus = [
      {
        id: 1,
        label: 'Thành Chương Dương',
        icon: 'pi pi-home',
        route: '/thanh-chuong-duong',
        isActive: true,
      },
      {
        id: 2,
        label: 'Mộng Ảo Quốc',
        icon: 'pi pi-book',
        route: '/tang-kinh',
        isActive: false,
      },
      {
        id: 3,
        label: 'Tế Sanh Đường',
        icon: 'pi pi-cog',
        route: '/bang-hoi',
        isActive: false,
      },
    ];
    this.sideBarGroup.push({
      title: this.langKeys.guild,
      child: guildMenus,
    });

    const scripturesMenu = [
      {
        id: 4,
        label: 'Angular',
        icon: 'pi pi-cog',
        route: '/settings',
        isActive: false,
      },
      {
        id: 5,
        label: 'Flutter',
        icon: 'pi pi-cog',
        route: '/settings',
        isActive: false,
      },
    ];
    this.sideBarGroup.push({
      title: this.langKeys.scriptures,
      child: scripturesMenu,
    });
  }

  onMenuItemClick(item: SideBarMenuItem): void {
    this.selectedMenu.set(item);
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  onDarkModeChange(value: boolean): void {
    this.appStore.changeThemeMode();
  }
  onLanguageChanged(value: boolean): void {
    this.appStore.changeLanguage(value);
    this.isVietnamese.set(value);
  }
}
