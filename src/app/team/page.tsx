import { TeamProfileCards } from "@/components/team/TeamProfileCards";
import React from "react";

const TeamPage = () => {
  return (
    <div className="flex flex-col justify-center items-center z-50 min-h-screen pt-20 pb-8">
      <TeamProfileCards />
    </div>
  );
};

export default TeamPage;
