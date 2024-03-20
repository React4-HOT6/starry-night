const MyPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1200px] flex justify-center items-center h-screen">
        <div className="card w-1/3 h-5/6 bg-black bg-opacity-40 shadow-xl p-3 m-4">
          <figure className="px-10 pt-10">
            <img src="" alt="" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">수 정</button>
            </div>
          </div>
        </div>

        <div className="card w-10/12 h-5/6 bg-black bg-opacity-40 shadow-xl p-6 m-4">
          <div className="card-body ">
            <h2 className="card-title">내 게시글 보기</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className="card-body">
            <h2 className="card-title">좋아요 목록 보기</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
