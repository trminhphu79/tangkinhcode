export type Guild = {
  name: string;
  id: string;
};
export type Author = {
  guild: Guild;
  avatarUrl: string;
  nickName: string;
};

export type Post = {
  createdAt: string | number;
  like: number;
  dislike: number;
  mediaUrl: string[];
  title: string;
  content: string;
};

export type NewFeed = {
  author: Author;
  post: Post;
};
