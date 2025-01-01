import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { NewFeedItemComponent } from '../new-feed-item/new-feed-item.component';
import { Author, Guild, NewFeed } from '../../../models/new-feed.model';
import { Router } from '@angular/router';

@Component({
  selector: 'pk-new-feed-list',
  templateUrl: './new-feed-list.component.html',
  imports: [NewFeedItemComponent],
})
export class NewFeedListComponent {
  dataSource = input.required<NewFeed[]>();

  router = inject(Router);

  onSelectGuild(guild: Guild) {
    console.log('onSelectGuild: ', guild);
    this.router.navigate([`/bang-hoi/${guild.id}`]);
  }

  onAuthorClick(author: Author) {
    this.router.navigate([`/`]);
  }
}
