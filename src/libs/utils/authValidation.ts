export const authValidation = (name: string, value: string): boolean => {
  switch (name) {
    case "userId":
      const idReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return idReg.test(value);
    case "password":
      const passwordReg =
        /^(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[^\s]{8,}$/;
      return passwordReg.test(value);
    case "nickname":
      if (value.length >= 2 && value.length <= 15) {
        return true;
      } else {
        return false;
      }
    case "birth":
      const [yyyy, mm, dd] = value.split("-");
      if (yyyy?.length === 4 && mm?.length === 2 && dd?.length === 2) {
        return new Date(value).toString().split(". ")[2] === dd;
      } else {
        return false;
      }
    default:
      return false;
  }
};
