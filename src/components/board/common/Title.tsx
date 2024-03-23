import React, { SetStateAction } from "react";

export const Title = ({
  title,
  setTitle,
}: {
  title: string;
  setTitle: SetStateAction<string>;
}) => {
  return (
    <input
      type="text"
      placeholder="제목을 입력하세요."
      className="input input-bordered font-bold text-black"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      maxLength={50}
      readOnly={readMode}
    />
  );
};
