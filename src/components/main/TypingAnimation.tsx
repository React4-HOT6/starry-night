"use client";

import React, { useEffect, useState } from "react";
import useTypingAnimation from "@/hooks/useTypingAnimation";
import { TypingAnimationProps } from "@/types";

const TypingAnimation: React.FC<TypingAnimationProps> = ({ speed = 150 }) => {
  const [typingTextIndex, setTypingTextIndex] = useState(0);
  // const [completedText, setCompletedText] = useState(false);

  const texts = [
    {
      content: "별자리의 매력에",
      className: "main-title lg:text-8xl md:text-6xl text-5xl",
    },
    {
      content: "빠져보세요!",
      className: "main-title lg:text-8xl md:text-6xl text-5xl",
    },
    {
      content: "매일의 운세, 별자리에 대한 정보,",
      className: "mt-4 lg:text-4xl md:text-3xl text-2xl",
    },
    {
      content: "그리고 생생한 커뮤니티를 경험하세요.",
      className: "md:mt-2 lg:text-4xl md:text-3xl text-2xl",
    },
  ];

  const currentText = texts[typingTextIndex].content;
  const typingText = useTypingAnimation(currentText, speed);
  useEffect(() => {
    if (typingText === currentText || typingTextIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setTypingTextIndex((prev) => prev + 1);
      }, 600); // @초 후 다음 텍스트로 넘어감
      if (typingTextIndex === texts.length - 1) {
        clearTimeout(timer);
      }
      return () => clearTimeout(timer);
    }
  }, [typingText, currentText, typingTextIndex, texts.length]);

  return (
    <div className="flex flex-col justify-center items-center z-50 min-h-screen max-w-screen-lg m-auto px-5 text-center pt-16 pb-6">
      {texts.map((item, index) => (
        <div key={index} className={item.className}>
          {index === typingTextIndex
            ? typingText
            : index < typingTextIndex
            ? item.content
            : ""}
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation;
