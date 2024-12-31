import { NewFeedListComponent } from '@tangkinhcode/shared/compnent/new-feed';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-new-feed',
  imports: [CommonModule, NewFeedListComponent],
  templateUrl: './new-feed.component.html',
  styleUrl: './new-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewFeedComponent {}
