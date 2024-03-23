"use client";
import { Button } from "@/components/board/common/Button";
import { SelectCategory } from "@/components/board/write/SelectCategory";
import { SelectImages } from "@/components/board/write/SelectImages";
import MessageModal from "@/components/modal/MessageModal";
import { getUserId } from "@/libs/utils/api/supabase/authAPI";
import {
  deletePost,
  selectPost,
  updatePost,
} from "@/libs/utils/api/supabase/postAPI";
import { uploadImage, deleteImages } from "@/libs/utils/api/supabase/storeAPI";
import { Post } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

const DetailPage = () => {
  let postId = useRef("");
  let userId = useRef("");
  let isPermitted = useRef(false);
  let post = useRef<Post>();
  const url = usePathname();
  const router = useRouter();

  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState("  ");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [imagesFile, setImagesFile] = useState<File[]>([]);
  // const [comments, setComments] = useState<Comment[]>([]);

  const popAlertModal = (name: string, text: string) => {
    setToggleModal(true);
    setModalData({
      type: "alert",
      name,
      text,
    });
  };

  const init = async () => {
    const userIdResponse = await getUserId();
    if (userIdResponse.status === "success") {
      userId.current = userIdResponse.result;
    } else {
      userId.current = "";
    }
    const postResponse = await selectPost(postId.current);
    if (postResponse.status === "fail") {
      return popAlertModal(
        "게시글 정보",
        "게시글 정보를 불러오는데 실패했습니다."
      );
    }

    post.current = postResponse.result;
    const images = post.current.images;
    if (images && images.length > 0) {
      setImagesSrc(images);
    }
    setTitle(post.current.title!);
    setContent(post.current.content!);
    setCategory(post.current.category!);
    setDate(post.current.created_at!);
    setAvatar(post.current.avatar!);
    isPermitted.current = userId.current === post.current.user_id;
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
      process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL + imageSrc.path;
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

  const updateBoard = async (id: string, images: string[]) => {
    const response = await updatePost(id!, {
      title,
      category,
      content,
      images: images,
      created_at: new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      }),
    });
    if (response.status === "success") {
      return popAlertModal("게시글 수정", "게시글을 수정하였습니다.");
    } else {
      return popAlertModal("게시글 수정", "게시글을 수정하지 못했습니다.");
    }
  };

  const deleteStorageImages = async (images: string[] | undefined) => {
    if (typeof images === "undefined") {
      return popAlertModal(
        "게시글 이미지",
        "게시글에 저장된 이미지가 없습니다.."
      );
    }
    const response = await deleteImages(images);
    if (response.status === "fail") {
      return popAlertModal(
        "게시글 이미지",
        "이미지를 삭제하는데 실패했습니다.."
      );
    }
  };

  const onConfirm = async (e: MouseEvent) => {
    e.preventDefault();
    deleteStorageImages(post.current?.images);
    const images = await getUploadedImagesPath(postId.current);
    await updateBoard(postId.current, images);

    router.push("/board");
  };

  useEffect(() => {
    init();
  }, []);

  //NOTE - 이미지 로딩 중일 때 이미지 구현하기
  //NOTE - 아바타 클릭하면 계정 정보 모달창 띄우기
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
              onDelete(e);
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

export default DetailPage;
