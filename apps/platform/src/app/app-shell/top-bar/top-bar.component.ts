import {
  ChangeDetectionStrategy,
  Component,
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
import { KeyLanguage } from '@tangkinhcode/shared/language';
import { TranslatePipe } from '@tangkinhcode/shared/language';
import { MenuItem } from 'primeng/api';
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
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  navigator = inject(Router);
  userActions: WritableSignal<MenuItem[] | undefined> = signal([
    {
      label: 'Đăng ký',
      // icon: 'pi pi-refresh',
      url: '/auth',
    },
    {
      label: 'Đăng xuất',
      // icon: 'pi pi-upload',
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
}
