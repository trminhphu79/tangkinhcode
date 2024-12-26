import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-community',
  imports: [CommonModule],
  template: '<h1>community works!</h1>',
  styleUrl: './community.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {}
