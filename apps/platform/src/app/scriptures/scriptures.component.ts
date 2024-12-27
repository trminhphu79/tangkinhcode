import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pk-scriptures',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './scriptures.component.html',
  styleUrl: './scriptures.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScripturesComponent {}
