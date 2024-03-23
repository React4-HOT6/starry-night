"use client";

import React from "react";
import { useBoardStore } from "@/store/store";
const BoardMenu = () => {
  const setSelectedCategory = useBoardStore(
    (state) => state.setSelectedCategory
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-2">
      <ul className="menu bg-base-200 w-56  rounded-box">
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("")}>전체</button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("물병자리")}>
            물병자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("양자리")}>양자리</button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("게자리")}>게자리</button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("염소자리")}>
            염소자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("쌍둥이자리")}>
            쌍둥이자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("사자자리")}>
            사자자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("천칭자리")}>
            천칭자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("물고기자리")}>
            물고기자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("궁수자리")}>
            궁수자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("전갈자리")}>
            전갈자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("황소자리")}>
            황소자리
          </button>
        </li>
        <li className="border-b border-gray-700">
          <button onClick={() => handleCategoryClick("처녀자리")}>
            처녀자리
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BoardMenu;
