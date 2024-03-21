import React, { MouseEventHandler } from "react";

export const Button = ({
  children,
  onClick,
  type,
}: {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
}) => {
  let className = "";
  switch (children) {
    case "확인":
    case "수정":
      className = "btn btn-primary";
      break;

    case "목록":
    case "취소":
      className = "btn btn-accent";
      break;
    default:
      break;
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
