"use client";
import { SelectCategory } from "@/components/write/SelectCategory";
import { Thumbnails } from "@/components/write/Thumbnails";
import { selectPost } from "@/libs/utils/api/supabase/postAPI";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const DetailPage = () => {
  const url = usePathname();
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [readMode, setReadMode] = useState(true);

  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    if (e.target.files.length === 0) {
      return setImagesSrc([]);
    }

    if (e.target.files.length > 5) {
      setImagesSrc([]);
      e.target.value = "";
      return alert("최대 이미지 업로드 갯수 5개를 초과하였습니다.");
    }
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const imageURL = URL.createObjectURL(file);
      setImagesSrc((prev: string[]) => [...prev, imageURL]);
    }
  };

  const getParamId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    return id;
  };

  useEffect(() => {
    const test = async () => {
      const id = getParamId(url);
      const response = await selectPost(id!);
      if (response.status === "success") {
        const post = response.result;
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category);
        setDate(post.created_at);
        setAvatar(post.avatar);
      } else {
        console.log("데이터 불러오기 실패");
      }
    };
    test();
  }, []);

  const id = getParamId(url);
  console.log(id);

  //NOTE - 가로 길이 수정할 것
  //NOTE - 카테고리 선택은 드롭박스로 넣기
  //NOTE - 이미지 로딩 중일 때 이미지 구현하기
  //NOTE - 이미지 선택 초기화 기능
  //NOTE - 아바타 클릭하면 계정 정보 모달창 띄우기
  return (
    <main className="flex flex-col justify-center mx-auto w-2/3">
      <form className="flex flex-col mx-auto w-full justify-center gap-y-5 ">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="input input-bordered font-bold text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          readOnly={readMode}
        />
        <section className="flex flex-row justify-end bg">
          <p className="text-black bg-white rounded-lg p-1 text-right">
            {`${category} | ${date}`}
          </p>
          <Image src={avatar} width={50} height={50} alt="이미지 없음"></Image>
        </section>
        {!readMode && <SelectCategory setCategory={setCategory} />}
        <textarea
          className="textarea textarea-bordered resize-none h-80 font-bold text-black "
          placeholder="본문을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={50}
          maxLength={500}
          readOnly={readMode}
        ></textarea>
        {!readMode && (
          <Thumbnails imagesSrc={imagesSrc} setImagesSrc={setImagesSrc} />
        )}
      </form>
    </main>
  );
};

export default DetailPage;
