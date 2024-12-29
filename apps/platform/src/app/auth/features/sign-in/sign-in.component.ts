import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { rootSelector } from '../../../theme.config';
@Component({
  selector: 'pk-sign-in',
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    TooltipModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  signIn() {
    console.log('signIn...');
  }

  signUp() {
    console.log('signUp...');
  }

  changeMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(rootSelector);
  }
}
