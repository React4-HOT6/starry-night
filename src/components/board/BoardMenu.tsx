"use client";

import { useState, useEffect } from "react";
import { useBoardStore } from "@/store/store";

const BoardMenu = () => {
  const setSelectedCategory = useBoardStore(
    (state) => state.setSelectedCategory
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const onClickCategory = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const onClickToggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-2">
      {isMobile ? (
        <div className="dropdown  dropdown-bottom">
          <div
            onClick={onClickToggleMenu}
            tabIndex={0}
            role="button"
            className="btn m-1"
          >
            메뉴
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("")}>전체</button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("물병자리")}>
                  물병자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("양자리")}>
                  양자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("게자리")}>
                  게자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("염소자리")}>
                  염소자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("쌍둥이자리")}>
                  쌍둥이자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("사자자리")}>
                  사자자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("천칭자리")}>
                  천칭자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("물고기자리")}>
                  물고기자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("궁수자리")}>
                  궁수자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("전갈자리")}>
                  전갈자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("황소자리")}>
                  황소자리
                </button>
              </li>
              <li className="border-b border-gray-700">
                <button onClick={() => onClickCategory("처녀자리")}>
                  처녀자리
                </button>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("")}>전체</button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("물병자리")}>
              물병자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("양자리")}>양자리</button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("게자리")}>게자리</button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("염소자리")}>
              염소자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("쌍둥이자리")}>
              쌍둥이자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("사자자리")}>
              사자자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("천칭자리")}>
              천칭자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("물고기자리")}>
              물고기자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("궁수자리")}>
              궁수자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("전갈자리")}>
              전갈자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("황소자리")}>
              황소자리
            </button>
          </li>
          <li className="border-b border-gray-700">
            <button onClick={() => onClickCategory("처녀자리")}>
              처녀자리
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BoardMenu;
