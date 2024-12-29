import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'pk-app-shell',
  imports: [MainLayoutComponent, TopBarComponent, SideBarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {}
