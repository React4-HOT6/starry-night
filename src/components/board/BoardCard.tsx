import Image from "next/image";
import React from "react";

const BoardCard = () => {
  return (
    <div>
      <div className="card p-2 w-[220px] h-[320px] bg-base-200 ml-4 shadow-xl">
        <figure>
          <Image
            src="https://orirzehunwkcqwagnbau.supabase.co/storage/v1/object/public/images/posts/avatar1.jpg https://orirzehunwkcqwagnbau.supabase.co/storage/v1/object/public/images/posts/avatar2.jpg?t=2024-03-21T11%3A26%3A04.398Z"
            alt="Shoes"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">title!</h2>
          <p>context</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
