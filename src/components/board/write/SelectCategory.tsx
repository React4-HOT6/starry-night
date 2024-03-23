import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

export const SelectCategory = ({
  setCategory,
  selectedCategory,
}: {
  setCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}) => {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setCategory(category);
  };

  return (
    <select
      name="category"
      required={true}
      onChange={(e) => onSelectChange(e)}
      className="select select-bordered w-full max-w-xs text-black"
      value={selectedCategory}
    >
      <option value="별자리 선택" disabled>
        별자리 선택
      </option>
      <option value="양자리">♈양자리</option>
      <option value="황소자리">♉황소자리</option>
      <option value="쌍둥이자리">♊쌍둥이자리</option>
      <option value="게자리">♋게자리</option>
      <option value="사자자리">♌사자자리</option>
      <option value="처녀자리">♍처녀자리</option>
      <option value="천칭자리">♎천칭자리</option>
      <option value="전갈자리">♏전갈자리</option>
      <option value="궁수자리">♐궁수자리</option>
      <option value="염소자리">♑염소자리</option>
      <option value="물병자리">♒물병자리</option>
      <option value="물고기자리">♓물고기자리</option>
    </select>
  );
};
