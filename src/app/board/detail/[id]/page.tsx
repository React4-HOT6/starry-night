"use client";
import { Button } from "@/components/board/common/Button";
import { ImagesCarousel } from "@/components/board/common/ImagesCarousel";
import { PostInfo } from "@/components/board/read/PostInfo";
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
import Image from "next/image";
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
  const [avatar, setAvatar] = useState(
    `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_AVATAR_URL}default/defaultAvatar.svg`
  );
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [imagesFile, setImagesFile] = useState<File[]>([]);
  const [readMode, setReadMode] = useState(true);

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
    if (post.current.avatar) {
      setAvatar(post.current.avatar!);
    }
    isPermitted.current = userId.current === post.current.user_id;
  };

  const onEdit = (e: MouseEvent) => {
    e.preventDefault();

    if (!isPermitted.current) {
      return popAlertModal("게시글 수정", "자신의 글만 수정할 수 있습니다.");
    }

    setReadMode(false);
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

  const onDelete = async (e: MouseEvent) => {
    e.preventDefault();

    if (!isPermitted.current) {
      return popAlertModal("게시글 삭제", "자신의 글만 삭제할 수 있습니다.");
    }

    const response = await deletePost(postId.current);
    if (response.status === "success") {
      popAlertModal("게시글 삭제", "게시글을 삭제하였습니다..");
      return router.push("/board");
    } else {
      return popAlertModal("게시글 삭제", "게시글을 삭제하지 못했습니다.");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="flex flex-col justify-center pt-20 mx-auto w-2/3 pb-10">
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
        {readMode && (
          <PostInfo
            category={category}
            date={date}
            avatar={avatar}
            birthday={post.current?.birthday!}
            nickname={post.current?.nickname!}
          />
        )}
        {!readMode && (
          <SelectCategory
            setCategory={setCategory}
            selectedCategory={category}
          />
        )}
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
          <SelectImages
            imagesSrc={imagesSrc}
            setImagesSrc={setImagesSrc}
            setImagesFile={setImagesFile}
          />
        )}
        {readMode && imagesSrc.length > 0 ? (
          imagesSrc.length > 1 ? (
            <ImagesCarousel
              imagesSrc={imagesSrc}
              countOfImages={imagesSrc.length}
            />
          ) : (
            <Image
              className="w-full h-80"
              src={imagesSrc[0]}
              quality={100}
              width={100}
              height={100}
              alt="이미지 미리보기"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
            ></Image>
          )
        ) : (
          <></>
        )}
        {readMode ? (
          <section className="flex flex-row justify-end gap-x-5">
            <Button
              onClick={(e) => {
                onEdit(e);
              }}
            >
              수정
            </Button>
            <Button
              onClick={(e) => {
                onDelete(e);
              }}
            >
              삭제
            </Button>
            <Button onClick={(e) => onCancel(e)}>목록</Button>
          </section>
        ) : (
          <section className="flex flex-row justify-end gap-x-5">
            <Button type="submit" onClick={(e) => onConfirm(e)}>
              확인
            </Button>
            <Button onClick={(e) => onCancel(e)}>목록</Button>
          </section>
        )}
      </form>
      {toggleModal && (
        <MessageModal modalToggle={setToggleModal} {...modalData} />
      )}
    </main>
  );
};

export default DetailPage;
