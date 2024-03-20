export type Post = {
  category?: string;
  content?: string;
  created_at?: string;
  id?: string;
  image_urls?: string;
  title?: string;
  user_info?: {
    avatar?: string;
    birthday?: string;
    nickname?: string;
    userId?: string;
  };
};
