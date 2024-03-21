export type Fortune = {
  id: number;
  name: string;
  month: string;
  personality: string;
  horoscope_every: string;
  horoscope_love: string;
  horoscope_money: string;
  imgUrl: string;
};
export type Post = {
  category?: ZodiacType;
  content?: string;
  created_at?: string;
  id?: string;
  images?: string;
  title?: string;
  avatar?: string;
  birthday?: string;
  nickname?: string;
  user_id?: string;
};

export type Comment = {
  avatar?: string;
  content?: string;
  created_at?: string;
  id?: string;
  nickname?: "";
};

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

type ZodiacType = (typeof Zodiac)[keyof typeof Zodiac];
