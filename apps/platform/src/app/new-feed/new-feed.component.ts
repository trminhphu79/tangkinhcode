import { NewFeedListComponent } from '@tangkinhcode/shared/compnent/new-feed';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFeed } from 'shared/src/models/new-feed.model';

@Component({
  selector: 'pk-new-feed',
  imports: [CommonModule, NewFeedListComponent],
  templateUrl: './new-feed.component.html',
  styleUrl: './new-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewFeedComponent {
  data: NewFeed[] = [
    {
      author: {
        avatarUrl:
          'https://i.ytimg.com/vi/W5X1S4qeCyA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgQyhKMA8=&rs=AOn4CLCvdB4fLx_rz4JQ5q1So7LuAkEE_w',
        guild: {
          name: 'Viêm Võ Thành',
          id: '123123213',
        },
        nickName: 'langbachy',
      },
      post: {
        createdAt: new Date().getTime(),
        like: 842,
        dislike: 34,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/truyen-tranh-tu-tien-7.jpg',
        guild: {
          name: 'Thiên Vũ Minh',
          id: '123123213',
        },
        nickName: 'khuchongnhan',
      },
      post: {
        createdAt: new Date().toISOString(),
        like: 654,
        dislike: 23,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [],
      },
    },
    {
      author: {
        avatarUrl:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/truyen-tranh-tu-tien-7.jpg',
        guild: {
          name: 'Thiên Huyền Môn',
          id: '123123213',
        },
        nickName: 'cothanhthanh',
      },
      post: {
        createdAt: new Date().toISOString(),
        like: 523,
        dislike: 19,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [],
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        guild: {
          name: 'Cái Bang',
          id: '123123213',
        },
        nickName: 'viencaohan',
      },
      post: {
        createdAt: new Date().getTime() - 22400000,
        like: 789,
        dislike: 42,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://kenh14cdn.com/P5ztNeWnPgTuRvNfEChtKHpOhiE1F/Image/2012/10/hinh-4-b1fd3.JPG',
        guild: {
          name: 'Thiên Kiếm Tông',
          id: '123123213',
        },
        nickName: 'foodie_lover',
      },
      post: {
        createdAt: new Date().getTime() - 8400000,
        like: 912,
        dislike: 56,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://kenh14cdn.com/P5ztNeWnPgTuRvNfEChtKHpOhiE1F/Image/2012/10/hinh-4-b1fd3.JPG',
        guild: {
          name: 'Đảo Huyền Ly',
          id: '123123213',
        },
        nickName: 'diepkinhvu',
      },
      post: {
        createdAt: new Date().getTime() - 40006600,
        like: 478,
        dislike: 12,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        guild: {
          name: 'Cái Bang',
          id: '123123213',
        },
        nickName: 'lyvantieu.dz',
      },
      post: {
        createdAt: new Date().getTime() - 45400000,
        like: 683,
        dislike: 25,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        guild: {
          name: 'Cái Bang',
          id: '123123213',
        },
        nickName: 'diepnamthien',
      },
      post: {
        createdAt: new Date().getTime() - 2400000,
        like: 732,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        dislike: 37,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://t4.ftcdn.net/jpg/10/50/89/13/240_F_1050891362_qLJOB1thleWsSsIxlESJJGLiyEMvZnMt.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        guild: {
          name: 'Cái Bang',
          id: '123123213',
        },
        nickName: 'ngaotruongkhong',
      },
      post: {
        createdAt: new Date().getTime() - 11400000,
        like: 564,
        dislike: 18,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://t4.ftcdn.net/jpg/10/50/89/13/240_F_1050891362_qLJOB1thleWsSsIxlESJJGLiyEMvZnMt.jpg',
        ],
      },
    },
    {
      author: {
        avatarUrl:
          'https://imgcdn.stablediffusionweb.com/2024/8/15/4ad6c51e-1cdb-4ae0-beb8-83b4590b9a21.jpg',
        guild: {
          name: 'Cái Bang',
          id: '123123213',
        },
        nickName: 'adventure_seeker',
      },
      post: {
        createdAt: new Date().getTime() - 400000,
        like: 821,
        dislike: 29,
        content: `<span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta quo
        exercitationem ab earum, qui <strong>Khoi79</strong> quidem ipsum nisi ex cum quasi
        dolore natus tempore unde magnam placeat doloremque voluptas.</span>`,
        title:
          'Can anyone help me to explain how does Change detection works in angular?',
        mediaUrl: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/852px-Tabby_cat_with_blue_eyes-3336579.jpg',
        ],
      },
    },
  ];
}
