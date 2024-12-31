import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Component, input, output } from '@angular/core';
import { NewFeed } from 'shared/src/models/new-feed.model';
import { TimeAgoPipe } from 'shared/src/pipes';

@Component({
  selector: 'pk-new-feed-item',
  templateUrl: './new-feed-item.component.html',
  styleUrl: './new-feed-item.component.scss',
  imports: [AvatarModule, ButtonModule, TimeAgoPipe],
})
export class NewFeedItemComponent {
  data = input.required<NewFeed>();

  like = output();
  dislike = output();

  commentClick = output();
}
