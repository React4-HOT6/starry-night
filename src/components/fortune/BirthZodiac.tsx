export const calculateBirthZodiac = (birth: string): string => {
  const month = parseInt(birth.substring(4, 6));
  const day = parseInt(birth.substring(6));

  // 월과 일을 기준으로 별자리를 계산합니다.
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "물병자리";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "물고기자리";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "양자리";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "황소자리";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return "쌍둥이자리";
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return "게자리";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "사자자리";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "처녀자리";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "천칭자리";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "전갈자리";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "사수자리";
  } else {
    return "염소자리";
  }
};
