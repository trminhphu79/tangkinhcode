import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { rootSelector } from '../../theme.config';

@Component({
  selector: 'pk-main-layout',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  changeMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(rootSelector);
  }
}
