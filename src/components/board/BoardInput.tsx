"use client";
import { useBoardStore } from "@/store/store";
import React, { useState } from "react";

const BoardInput = () => {
  const [titleInput, setTitleInput] = useState("");
  const setSelectedTitle = useBoardStore((state) => state.setSelectedTitle);
  const setSelectedCategory = useBoardStore(
    (state) => state.setSelectedCategory
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const onClickSearch = () => {
    setSelectedCategory(null);
    setSelectedTitle(titleInput);
  };
  const onClickReset = () => {
    setSelectedCategory(null);
    setTitleInput("");
    setSelectedTitle("");
  };
  return (
    <div className="p-2 flex">
      <div>
        <input
          value={titleInput}
          onChange={onChangeInput}
          type="text"
          placeholder="제목을 입력하세요"
          className="input flex input-bordered w-[300px] bg-base-200 max-w-xs"
        />
      </div>
      <button onClick={onClickSearch} className="btn ml-2 flex btn-primary">
        검색
      </button>
      <button
        onClick={onClickReset}
        className="btn  ml-2 text-black flex btn-neutral"
      >
        초기화
      </button>
    </div>
  );
};

export default BoardInput;
