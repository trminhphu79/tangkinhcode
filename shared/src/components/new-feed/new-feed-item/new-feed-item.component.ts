import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Component, input, output } from '@angular/core';
import { NewFeed, Guild, Author } from '../../../models/new-feed.model';
import { TimeAgoPipe } from '../../../pipes';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'pk-new-feed-item',
  templateUrl: './new-feed-item.component.html',
  styleUrl: './new-feed-item.component.scss',
  imports: [AvatarModule, ButtonModule, TimeAgoPipe, NgTemplateOutlet],
})
export class NewFeedItemComponent {
  data = input.required<NewFeed>();

  like = output();
  dislike = output();

  imageClick = output();
  commentClick = output();

  guildClick = output<Guild>();
  authorClick = output<Author>();
}
