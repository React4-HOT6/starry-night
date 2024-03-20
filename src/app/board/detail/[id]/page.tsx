"use client";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

const DetailPage = () => {
  const url = usePathname();
  const [imageSrc, setImageSrc]: any = useState(null);

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const getParamId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    return id;
  };

  const id = getParamId(url);
  console.log(id);

  //NOTE - 가로 길이 수정할 것
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
        <section className="flex flex-row justify-start">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            accept="image/*"
            onChange={(e) => onUpload(e)}
          />
          <img src={imageSrc}></img>
        </section>
      </form>
    </main>
  );
};

export default DetailPage;
