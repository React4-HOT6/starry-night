export type Post = {
  category?: string;
  content?: string;
  created_at?: string;
  id?: string;
  images?: string[];
  title?: string;
  avatar?: string;
  birthday?: string;
  nickname?: string;
  user_id?: string;
};

export type TypingAnimationProps = {
  speed?: number;
};

export interface SignInOutButtonType {
  isSignIn: boolean;
  onClickLogout: () => void;
}

export type Board = {
  avatar: string;
  birthday: string;
  category: string;
  content: string;
  created_at: string;
  id: string;
  images: string | null;
  nickname: string;
  title: string;
  user_id: string;
};
