const setDefaultImage = (images: string[], category: string) => {
  if (images.length === 0) {
    switch (category) {
      case "게자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Cancer.jpg`
        );
        break;
      case "물고기자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Pisces.jpg`
        );
        break;
      case "물병자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Aquarius.jpg`
        );
        break;
      case "궁수자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Sagittarius.jpg`
        );
        break;
      case "사자자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Leo.jpg`
        );
        break;
      case "쌍둥이자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Gemini.jpg`
        );
        break;
      case "양자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Aries.jpg`
        );
        break;
      case "염소자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Capricornus.jpg`
        );
        break;
      case "전갈자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Scorpio.jpg`
        );
        break;
      case "처녀자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Virgo.jpg`
        );
        break;
      case "천칭자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Libra.jpg`
        );
        break;
      case "황소자리":
        images.push(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL}posts/default/Taurus.jpg`
        );
        break;
    }
  }
  return images;
};
