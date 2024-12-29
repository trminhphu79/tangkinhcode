import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { KeyLanguage } from '@tangkinhcode/shared/language';
import { TranslatePipe } from '@tangkinhcode/shared/language';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'pk-top-bar',
  imports: [
    MenubarModule,
    ButtonModule,
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
  langKeys = KeyLanguage;

  ngOnInit() {}

  navToHome() {
    this.navigator.navigate(['/']);
  }
  navToLogin() {
    this.navigator.navigate(['/auth']);
  }
}
