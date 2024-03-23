"use client";

import Image from "next/image";
import { teamMembers } from "./teamMembers";
import Link from "next/link";

export function TeamProfileCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 pt-14 max-w-screen-lg">
      {teamMembers.map((member) => (
        <div key={member.name}>
          <div className="shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col items-center py-8 px-10">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={150}
              height={150}
              className="mb-4"
            />
            <h1 className="font-bold text-base text-white mb-2 tracking-widest">
              {member.name}
            </h1>
            <pre className="font-normal text-sm text-slate-500 mb-4 text-center">
              {member.role}
            </pre>
            <Link
              href={member.gitURL}
              target="_blank"
              className="btn btn-outline min-h-6 h-10"
            >
              코드보러가기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
