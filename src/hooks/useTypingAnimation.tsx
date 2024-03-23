import { useState, useEffect } from "react";

const useTypingAnimation = (text: string, speed: number) => {
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    let index = 0;
    setTypingText("");
    const intervalTime = setInterval(() => {
      const next = text[index];
      setTypingText((prev) => prev + next);
      index++;
      if (index === text.length) {
        clearInterval(intervalTime);
      }
    }, speed);

    return () => clearInterval(intervalTime);
  }, [text, speed]);
  return typingText;
};

export default useTypingAnimation;
