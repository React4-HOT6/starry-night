import BoardCardContainer from "@/components/board/BoardCardContainer";
import BoardMenu from "@/components/board/BoardMenu";
import BoardInput from "./BoardInput";

const BoardContainer = () => {
  return (
    <div className="flex flex-col justify-items-start items-start  h-[90vh] m-[70px]">
      <BoardInput />
      <div className="flex">
        <BoardMenu />
        <BoardCardContainer />
      </div>
    </div>
  );
};

export default BoardContainer;
