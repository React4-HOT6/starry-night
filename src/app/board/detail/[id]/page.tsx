"use client";
import { Button } from "@/components/board/common/Button";
import { ImagesCarousel } from "@/components/board/common/ImagesCarousel";
import { PostInfo } from "@/components/board/read/PostInfo";
import { SelectCategory } from "@/components/board/write/SelectCategory";
import { SelectImages } from "@/components/board/write/SelectImages";
import { getUserId } from "@/libs/utils/api/supabase/authAPI";
import { selectPost, updatePost } from "@/libs/utils/api/supabase/postAPI";
import { uploadImage } from "@/libs/utils/api/supabase/storeAPI";
import { Comment } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

const DetailPage = () => {
  let postId = useRef("");
  let userId = useRef("");
  let isPermitted = useRef(false);
  const url = usePathname();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [imagesFile, setImagesFile] = useState<File[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [readMode, setReadMode] = useState(true);

  const getPostId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    if (typeof id === "undefined") {
      alert("잘못된 페이지입니다."); //NOTE - url이 잘못되었음
      return "";
    }
    return id;
  };

  const init = async () => {
    postId.current = getPostId(url);
    const userIdResponse = await getUserId();
    if (userIdResponse.status === "fail") {
      alert(userIdResponse); //NOTE - 유저 id를 불러올 수 없음
      return;
    }
    const userUuid = userIdResponse.result;
    userId.current = userUuid;
    const postResponse = await selectPost(postId.current);
    if (postResponse.status === "fail") {
      alert(postResponse.result); //NOTE - 해당하는 게시글 id에 해당하는 게시글이 db에 없음
      return;
    }

    const post = postResponse.result;
    const images = post.images;
    if (images && images.length > 0) {
      setImagesSrc(images);
    }
    setTitle(post.title);
    setContent(post.content);
    setCategory(post.category);
    setDate(post.created_at);
    setAvatar(post.avatar);
    setComments(post.comments);
    isPermitted.current = userId.current === post.user_id;
  }; //NOTE - 위치 생각하기

  const onEdit = async (e: MouseEvent) => {
    e.preventDefault();
    if (!isPermitted) {
      return alert("자신의 글만 수정할 수 있습니다.");
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
    //NOTE - supabase 실패할 경우 구현할 것
    const response = await uploadImage(file, path);
    if (response.status === "fail") {
      return;
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
      console.log("각각의 경로", uploadedImagePath);
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
      alert("성공");
    } else {
      alert("실패");
    }
  };

  const onConfirm = async (e: MouseEvent) => {
    e.preventDefault();
    setImagesSrc([]);
    const id = getPostId(url);
    const images = await getUploadedImagesPath(id!);
    console.log(images);
    console.log("테스트", images);
    // const imageString = changeArrayToString(images);

    await updateBoard(id!, images);

    //NOTE - 게시판으로 이동 넣기
  };

  const onDelete = async (e: MouseEvent) => {
    //NOTE - 삭제 구현하기
    e.preventDefault();
  };

  useEffect(() => {
    init();
  }, []);

  //NOTE - 가로 길이 수정할 것
  //NOTE - 카테고리 선택은 드롭박스로 넣기
  //NOTE - 이미지 로딩 중일 때 이미지 구현하기
  //NOTE - 아바타 클릭하면 계정 정보 모달창 띄우기
  //NOTE - main pt-20 임시로 설정
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
          readOnly={readMode}
        />
        {readMode && (
          <PostInfo category={category} date={date} avatar={avatar} />
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
        {readMode && imagesSrc.length > 0 && (
          <ImagesCarousel
            imagesSrc={imagesSrc}
            countOfImages={imagesSrc.length}
          />
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
