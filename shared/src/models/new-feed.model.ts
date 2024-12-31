export type NewFeed = {
  author: {
    avatarUrl: string;
    nickName: string;
  };
  post: {
    createdAt: string|number;
    like: number;
    dislike: number;
  };
};
