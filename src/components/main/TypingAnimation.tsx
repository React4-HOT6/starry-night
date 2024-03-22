"use client";

import React from "react";
import useTypingAnimation from "@/hooks/useTypingAnimation";
import { TypingAnimationProps } from "@/types";

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 150,
}) => {
  const typingText = useTypingAnimation(text, speed);
  return (
    <div className="flex flex-col justify-center items-center z-50 h-screen max-w-screen-lg m-auto">
      <div className="text-4xl text-center">{typingText}</div>
    </div>
  );
};

export default TypingAnimation;
