import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'pk-app-shell',
  imports: [MainLayoutComponent, SideBarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {}
