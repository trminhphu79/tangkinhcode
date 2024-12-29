import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-guild',
  imports: [CommonModule],
  templateUrl: './guild.component.html',
  styleUrl: './guild.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuildComponent {}
