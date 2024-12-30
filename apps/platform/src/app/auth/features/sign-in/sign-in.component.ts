import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { rootSelector } from '../../../theme.config';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
import { Router } from '@angular/router';
import { TopBarComponent } from '../../../app-shell/top-bar/top-bar.component';
@Component({
  selector: 'pk-sign-in',
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    TooltipModule,
    TranslatePipe,
    TopBarComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  keyLangs = KeyLanguage;

  private router: Router = inject(Router);

  protected isRegister = signal(false);
  protected actionHint = computed(() =>
    this.isRegister() ? KeyLanguage.signIn : KeyLanguage.signUp
  );
  protected questionHint = computed(() =>
    this.isRegister()
      ? KeyLanguage.youHadAccount
      : KeyLanguage.youNotHadAccount
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

  protected backHome() {
    this.router.navigateByUrl('/');
  }
}
