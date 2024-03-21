"use client";

import Image from "next/image";
import { teamMembers } from "./teamMembers";

export function TeamProfileCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 pt-14 max-w-screen-lg">
      {teamMembers.map((member) => (
        <div key={member.name}>
          <div className="shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col items-center py-8 px-14">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={150}
              height={150}
              className="mb-4"
            />
            <h1 className="font-bold text-xl text-white mb-2">{member.name}</h1>
            <p className="font-normal text-base text-slate-500 mb-4">
              {member.role}
            </p>
            <button className="btn btn-outline">코드보러가기</button>
          </div>
        </div>
      ))}
    </div>
  );
}
