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
import { MouseEvent, useEffect, useState } from "react";

const DetailPage = () => {
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
  const [userId, setUserId] = useState<string>("");
  const [postUserId, setPostUserId] = useState<string>("");
  const [readMode, setReadMode] = useState(true);
  const [isPermitted, setIsPermitted] = useState<boolean>(false);

  const getParamId = (url: string) => {
    const params = url.split("/");
    const id = params.pop();
    return id;
  };

  const onEdit = async (e: MouseEvent) => {
    e.preventDefault();
    setReadMode(false);
  };

  const onCancel = (e: MouseEvent) => {
    e.preventDefault();
    router.push("/board");
  };

  const onConfirm = async (e: MouseEvent) => {
    e.preventDefault();
    const id = getParamId(url);
    const date = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    let images = "";
    setImagesSrc([]);
    // let imagesSrc = "";
    // images.forEach((image) => (imagesSrc += image.concat(" ")));
    // imagesSrc = imagesSrc.trim();
    imagesFile.forEach(async (file, index) => {
      const path = `posts/${id}/${imagesFile[index].name}`; //NOTE - uuid로 바꾸기
      const response = await uploadImage(file, path);
      if (response.status === "success") {
        const imageSrc = response.result;
        const fullPath =
          process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL + imageSrc.path;
        images += fullPath.concat(" ");
      }
    });
    images = images.trim();
    console.log("전체경로", images); //NOTE - 안 나옴 inmagesSrc로 하면 앞에 blob:이 붙음
    // const response = await updatePost(id!, {
    //   title,
    //   category,
    //   content,
    //   // images: imagesSrc,
    //   created_at: date,
    // });
    // if (response.status === "success") {
    //   alert("성공");
    // } else {
    //   alert("실패");
    // }
    //NOTE - 게시판으로 이동 넣기
  };

  useEffect(() => {
    const test = async () => {
      const postId = getParamId(url);
      const userIdResponse = await getUserId();
      if (userIdResponse.status === "fail") {
        alert(userIdResponse);
        return;
      }
      const userUuid = userIdResponse.result;
      const postResponse = await selectPost(postId!);
      if (postResponse.status === "fail") {
        alert(postResponse.result);
        return;
      }
      const post = postResponse.result;
      const images = post.images?.split(" ");
      if (images && images.length > 0) {
        setImagesSrc(images);
      }
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
      setDate(post.created_at);
      setAvatar(post.avatar);
      setComments(post.comments);
      setUserId(userUuid);
      setPostUserId(post.user_id);
      setIsPermitted(userId === postUserId);
    };
    test();
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
        {readMode && (
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
      <div className="flex flex-col m-4 w-full justify-center gap-y-5">
        <section className="flex flex-row justify-start gap-x-5"></section>
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-row justify-start gap-x-5">
            <p key={index} className="text-black bg-white rounded-lg p-2 m-1">
              {`닉네임 : ${comment.nickname} | 내용 : ${comment.content} | 날짜 : ${comment.created_at}`}
            </p>
            <Button onClick={() => alert("hahaha")}>X</Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DetailPage;
