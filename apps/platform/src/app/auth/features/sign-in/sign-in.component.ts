import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { rootSelector } from '../../../theme.config';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
@Component({
  selector: 'pk-sign-in',
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    TooltipModule,
    TranslatePipe,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  keyLangs = KeyLanguage;
  protected isRegister = signal(false);
  protected actionHint = computed(() =>
    this.isRegister() ? KeyLanguage.SIGN_IN : KeyLanguage.SIGN_UP
  );
  protected questionHint = computed(() =>
    this.isRegister()
      ? KeyLanguage.YOU_HAD_ACCOUNT
      : KeyLanguage.YOU_NOT_HAD_ACCOUNT
  );

  protected signIn() {
    console.log('signIn...');
  }

  protected signUp() {
    console.log('signUp...');
  }

  protected changeMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(rootSelector);
  }

  protected changeTab() {
    this.isRegister.set(!this.isRegister());
  }
}
