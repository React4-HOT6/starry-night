export const calculateBirthZodiac = (
  birth: string
): { id: string; name: string } => {
  const month = parseInt(birth.split("-")[1]);
  const day = parseInt(birth.split("-")[2]);

  // 월과 일을 기준으로 별자리를 계산합니다.
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return {
      id: "Aquarius",
      name: "물병자리",
    };
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return {
      id: "Pisces",
      name: "물고기자리",
    };
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return {
      id: "Aries",
      name: "양자리",
    };
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return {
      id: "taurus",
      name: "황소자리",
    };
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return {
      id: "Gemini",
      name: "쌍둥이자리",
    };
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return {
      id: "Cancer",
      name: "게자리",
    };
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return {
      id: "Leo",
      name: "사자자리",
    };
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return {
      id: "Virgo",
      name: "처녀자리",
    };
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return {
      id: "Libra",
      name: "천칭자리",
    };
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return {
      id: "Scorpio",
      name: "전갈자리",
    };
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return {
      id: "Sagittarius",
      name: "사수자리",
    };
  } else {
    return {
      id: "Capricorn",
      name: "염소자리",
    };
  }
};
