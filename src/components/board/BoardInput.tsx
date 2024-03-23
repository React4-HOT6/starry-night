"use client";
import { useBoardStore } from "@/store/store";
import React, { useState } from "react";

const BoardInput = () => {
  const [titleInput, setTitleInput] = useState("");
  const setSelectedTitle = useBoardStore((state) => state.setSelectedTitle);
  const setSelectedCategory = useBoardStore(
    (state) => state.setSelectedCategory
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const handleSearchClick = () => {
    setSelectedCategory(null);
    setSelectedTitle(titleInput);
  };
  return (
    <div className="p-2 flex">
      <div>
        <input
          value={titleInput}
          onChange={handleInputChange}
          type="text"
          placeholder="제목을 입력하세요"
          className="input flex input-bordered w-[300px] bg-base-200 max-w-xs"
        />
      </div>
      <button onClick={handleSearchClick} className="btn ml-2 flex btn-primary">
        검색
      </button>
    </div>
  );
};

export default BoardInput;
