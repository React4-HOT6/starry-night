import React from "react";

const BoardInput = () => {
  return (
    <div className="p-2 flex">
      <div>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="input flex input-bordered w-[300px] bg-base-200 max-w-xs"
        />
      </div>
      <button className="btn ml-2 flex btn-primary">검색</button>
    </div>
  );
};

export default BoardInput;
