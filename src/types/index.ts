export type Fortune = {
  horoscope_every: string | null;
  horoscope_love: string | null;
  horoscope_money: string | null;
  id: number;
  imgUrl: string | undefined;
  month: string | null;
  name: string | null;
  personality: string | null;
};
export type Post = {
  category?: ZodiacType;
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

export type Comment = {
  avatar: string;
  content: string;
  created_at: string;
  id: string;
  nickname: string;
};

export type TypingAnimationProps = {
  text: string;
  speed?: number;
};

export interface SignInOutButtonType {
  isSignIn: boolean;
  onClickLogout: () => void;
}

const Zodiac = {
  aries: "양자리",
  taurus: "황소자리",
  gemini: "쌍둥이자리",
  cancer: "게자리",
  leo: "사자자리",
  virgo: "처녀자리",
  libra: "천칭자리",
  scorpio: "전갈자리",
  sagittarius: "사수자리",
  capricorn: "염소자리",
  aquarius: "물병자리",
  pisces: "물고기자리",
};
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
type ZodiacType = (typeof Zodiac)[keyof typeof Zodiac];
