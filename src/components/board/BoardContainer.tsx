import BoardCardContainer from "@/components/board/BoardCardContainer";
import BoardMenu from "@/components/board/BoardMenu";

const BoardContainer = () => {
  return (
    <div className="flex  h-[90vh]  p-[70px]">
      <BoardMenu />
      <BoardCardContainer />
    </div>
  );
};

export default BoardContainer;
