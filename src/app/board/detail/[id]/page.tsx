"use client";
import { Thumbnails } from "@/components/write/Thumbnails";
import { selectPost } from "@/libs/utils/api/supabase/postAPI";
import { Post } from "@/types";
import { calcLength } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const DetailPage = () => {
  const url = usePathname();
  const [imagesSrc, setImagesSrc]: any = useState([]);
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
        <section className="flex flex-row"></section>
        <p className="text-black bg-white rounded-lg p-1 text-right">
          {`${category} | ${date}`}
        </p>
        <Image src={avatar} width={50} height={50} alt="이미지 없음"></Image>
        <select className="select select-bordered w-full max-w-xs text-black">
          <option disabled selected>
            별자리 선택
          </option>
          <option>♈양자리</option>
          <option>♉황소자리</option>
          <option>♊쌍둥이자리</option>
          <option>♋게자리</option>
          <option>♌사자자리</option>
          <option>♍처녀자리</option>
          <option>♎천칭자리</option>
          <option>♏전갈자리</option>
          <option>♐궁수자리</option>
          <option>♑염소자리</option>
          <option>♒물병자리</option>
          <option>♓물고기자리</option>
        </select>
        <textarea
          className="textarea textarea-bordered resize-none h-80 font-bold text-black "
          placeholder="본문을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={50}
          maxLength={500}
          readOnly={readMode}
        ></textarea>
        <section className="flex flex-col justify-start gap-5">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs none"
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
