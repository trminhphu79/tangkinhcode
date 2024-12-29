import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-fortress',
  imports: [CommonModule],
  templateUrl: './fortress.component.html',
  styleUrl: './fortress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FortressComponent {}
