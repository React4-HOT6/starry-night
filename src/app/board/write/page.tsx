"use client";
import { Button } from "@/components/board/common/Button";
import { SelectCategory } from "@/components/board/write/SelectCategory";
import { SelectImages } from "@/components/board/write/SelectImages";
import MessageModal from "@/components/modal/MessageModal";
import {
  getUserBirthday,
  getUserId,
  getUserNickname,
} from "@/libs/utils/api/supabase/authAPI";
import { insertPost } from "@/libs/utils/api/supabase/postAPI";
import { uploadImage } from "@/libs/utils/api/supabase/storeAPI";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

const WritePage = () => {
  let postId = useRef("");
  let userId = useRef("");
  let userBirthday = useRef("");
  let userNickname = useRef("");
  let userAvatar = useRef("");

  const url = usePathname();
  const router = useRouter();

  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState("  ");
  const [category, setCategory] = useState("양자리");
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [imagesFile, setImagesFile] = useState<File[]>([]);

  const setPostId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    if (typeof id === "string") {
      postId.current = id;
    } else {
      popAlertModal("페이지 오류", "잘못된 페이지 입니다.");
      router.push("/board");
    }
  };

  const popAlertModal = (name: string, text: string) => {
    setToggleModal(true);
    setModalData({
      type: "alert",
      name,
      text,
    });
  };

  const init = async () => {
    setPostId(url);
    const userIdResponse = await getUserId();
    if (userIdResponse.status === "success") {
      userId.current = userIdResponse.result;
    }
    const userBirthdayResponse = await getUserBirthday();
    if (userBirthdayResponse.status === "success") {
      userBirthday.current = userBirthdayResponse.result;
    } else {
      userBirthday.current = "";
    }
    const userNicknameResponse = await getUserNickname();
    if (userNicknameResponse.status === "success") {
      userNickname.current = userNicknameResponse.result;
    } else {
      userNickname.current = "";
    }
    userAvatar.current = `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_AVATAR_URL}${userId.current}/avatar.png`;
    console.log(userAvatar.current);
  };

  const onCancel = (e: MouseEvent) => {
    e.preventDefault();
    router.push("/board");
  };

  const getImagePath = (id: string, file: File) => {
    const fileLength = file.name.length;
    const lastDotIndex = file.name.lastIndexOf(".");
    const fileExt = file.name.substring(lastDotIndex + 1, fileLength);
    const path = `posts/${id}/${crypto.randomUUID()}.${fileExt}`;

    return path;
  };

  const getUploadedImagePath = async (file: File, path: string) => {
    const response = await uploadImage(file, path);
    if (response.status === "fail") {
      return popAlertModal(
        "이미지 업로드",
        "storage에 이미지를 업로드하는데 실패"
      );
    }
    const imageSrc = response.result;
    const fullPath =
      process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BOARD_URL + imageSrc.path;
    return fullPath;
  };

  const getUploadedImagesPath = async (id: string) => {
    const imagesPath: string[] = [];
    const promise = imagesFile.map(async (file) => {
      const imagePath = getImagePath(id!, file);
      const uploadedImagePath = await getUploadedImagePath(file, imagePath);
      imagesPath.push(uploadedImagePath!);
    });
    await Promise.all(promise);
    return imagesPath;
  };
  const writeBoard = async (images: string[]) => {
    const response = await insertPost({
      title,
      content,
      created_at: new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      }),
      category,
      user_id: userId.current,
      avatar: userAvatar.current,
      birthday: userBirthday.current,
      nickname: userNickname.current,
      images,
    });
    if (response.status === "success") {
      return popAlertModal("게시글 작성", "게시글을 작성하였습니다.");
    } else {
      return popAlertModal("게시글 작성", "게시글을 작성하지 못했습니다.");
    }
  };

  const onWrite = async (e: MouseEvent) => {
    e.preventDefault();
    const images = await getUploadedImagesPath(postId.current);
    await writeBoard(images);

    router.push("/board");
  };

  useEffect(() => {
    init();
  }, []);

  //NOTE - 이미지 로딩 중일 때 이미지 구현하기
  //NOTE - main pt-20 임시로 설정
  //NOTE - alert 창 유저에게 보여줄 것 제외하고 삭제
  return (
    <main className="flex flex-col justify-center pt-20 mx-auto w-2/3">
      <form className="flex flex-col mx-auto w-full justify-center gap-y-5 ">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="input input-bordered font-bold text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
        />
        <SelectCategory setCategory={setCategory} selectedCategory={category} />
        <textarea
          className="textarea textarea-bordered resize-none h-80 font-bold text-black "
          placeholder="본문을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={50}
          maxLength={500}
        ></textarea>
        <SelectImages
          imagesSrc={imagesSrc}
          setImagesSrc={setImagesSrc}
          setImagesFile={setImagesFile}
        />
        <section className="flex flex-row justify-end gap-x-5">
          <Button
            onClick={(e) => {
              onWrite(e);
            }}
          >
            작성
          </Button>
          <Button onClick={(e) => onCancel(e)}>목록</Button>
        </section>
      </form>
      {toggleModal && (
        <MessageModal modalToggle={setToggleModal} {...modalData} />
      )}
      {/* <div className="flex flex-col m-4 w-full justify-center gap-y-5">
        <section className="flex flex-row justify-start gap-x-5"></section>
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-row justify-start gap-x-5">
            <p key={index} className="text-black bg-white rounded-lg p-2 m-1">
              {`닉네임 : ${comment.nickname} | 내용 : ${comment.content} | 날짜 : ${comment.created_at}`}
            </p>
            {!readMode && <Button onClick={() => alert("hahaha")}>X</Button>}
          </div>
        ))}
      </div> */}
    </main>
  );
};

export default WritePage;
