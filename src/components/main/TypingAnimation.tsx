"use client";

import React from "react";
import useTypingAnimation from "@/hooks/useTypingAnimation";
import { TypingAnimationProps } from "@/types";

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 150,
}) => {
  const lines = text.split("\n");
  const typingText = useTypingAnimation(text, speed);
  return (
    <div className="flex flex-col justify-center items-center z-50 h-screen">
      {lines.map((line, index) => (
        <div key={index}>{typingText}</div>
      ))}
    </div>
  );
};

export default TypingAnimation;
