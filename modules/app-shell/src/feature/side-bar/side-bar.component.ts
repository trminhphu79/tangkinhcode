import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../ui/menu/menu.component';
import { CommunityComponent } from '../../ui/community/community.component';

@Component({
  selector: 'pk-side-bar',
  imports: [CommonModule, MenuComponent, CommunityComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {}
