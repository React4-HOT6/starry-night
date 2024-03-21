"use client";
import { Thumbnails } from "@/components/write/Thumbnails";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

const DetailPage = () => {
  const url = usePathname();
  const [imagesSrc, setImagesSrc]: any = useState([]);

  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }

    if (e.target.files.length > 5) {
      setImagesSrc([]);
      e.target.value = "";
      return alert("최대 이미지 업로드 갯수 5개를 초과하였습니다.");
    }
    for (let i = 0; i < e.target.files.length; i++) {
      setImagesSrc([]);
      const file = e.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagesSrc((prev: string[] | ArrayBuffer[] | null[]) => [
          ...prev,
          reader.result,
        ]);
      };
    }
  };

  const getParamId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    return id;
  };

  const id = getParamId(url);
  console.log(id);

  //NOTE - 가로 길이 수정할 것
  //NOTE - 카테고리 선택은 드롭박스로 넣기
  return (
    <main className="flex flex-col justify-center mx-auto w-2/3">
      <form className="flex flex-col mx-auto w-full justify-center gap-y-5 ">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="input input-bordered font-bold text-black"
          maxLength={50}
        />
        <textarea
          className="textarea textarea-bordered resize-none h-80 font-bold text-black "
          placeholder="본문을 입력하세요."
          rows={50}
          maxLength={500}
        ></textarea>
        <section className="flex flex-col justify-start gap-5">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            accept="image/*"
            multiple
            onChange={(e) => onImageUpload(e)}
          />
          {imagesSrc.length > 0 && <Thumbnails imagesSrc={imagesSrc} />}
        </section>
      </form>
    </main>
  );
};

export default DetailPage;
