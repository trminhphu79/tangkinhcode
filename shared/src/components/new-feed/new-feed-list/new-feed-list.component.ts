import { Component, input, ViewEncapsulation } from '@angular/core';
import { NewFeedItemComponent } from '../new-feed-item/new-feed-item.component';
import { NewFeed } from '../../../models/new-feed.model';

@Component({
  selector: 'pk-new-feed-list',
  templateUrl: './new-feed-list.component.html',
  imports: [NewFeedItemComponent],
})
export class NewFeedListComponent {
  dataSource = input<NewFeed[]>([
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'john_doe',
      },
      post: {
        createdAt: new Date().getTime(),
        like: 842,
        dislike: 34,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'jane_smith',
      },
      post: {
        createdAt: new Date().toISOString(),
        like: 654,
        dislike: 23,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'cool_kid',
      },
      post: {
        createdAt: new Date().toISOString(),
        like: 523,
        dislike: 19,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'traveler101',
      },
      post: {
        createdAt: '2024-09-03T20:50:30',
        like: 789,
        dislike: 42,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'foodie_lover',
      },
      post: {
        createdAt: '2024-03-15T11:05:20',
        like: 912,
        dislike: 56,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'tech_geek',
      },
      post: {
        createdAt: '2024-01-28T14:10:40',
        like: 478,
        dislike: 12,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'nature_guru',
      },
      post: {
        createdAt: '2024-06-22T18:25:50',
        like: 683,
        dislike: 25,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'music_junkie',
      },
      post: {
        createdAt: '2024-10-10T09:40:15',
        like: 732,
        dislike: 37,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'book_nerd',
      },
      post: {
        createdAt: '2024-08-19T22:15:05',
        like: 564,
        dislike: 18,
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        nickName: 'adventure_seeker',
      },
      post: {
        createdAt: '2024-04-06T16:30:25',
        like: 821,
        dislike: 29,
      },
    },
  ]);
}
