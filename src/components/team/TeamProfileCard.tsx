"use client";

import profileHeera from "@/assets/profile/profile-heera.png";
import Image from "next/image";
import { Meteors } from "@/components/team/meteors";

export function TeamProfileCard() {
  return (
    <div className="flex justify-center pt-10">
      <div className=" w-full relative max-w-xs">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
          <Image
            src={profileHeera}
            alt="Heera"
            width={150}
            height={150}
            className="z-50 mb-4"
          />
          <h1 className="font-bold text-xl text-white mb-4 relative">HEERA</h1>
          <p className="font-normal text-base text-slate-500 mb-4 relative">
            나는 강하다.
          </p>
          <button className="btn btn-outline">코드보러가기</button>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
