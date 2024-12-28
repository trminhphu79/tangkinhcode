export type Scripture = {
  author: string;
  content: string;
};

export type ScriptureState = {
  loading: boolean;
  scriptures: Scripture[];
};
