"use client";

import { useEffect } from "react";

import { FortunePinContainer } from "@/components/fortune/fortuneContainer";
import { useState } from "react";
import { Meteors } from "@/components/fortune/fortuneContainer";
import { getUserBirth } from "@/components/fortune/GetUserBirth";
import { calculateBirthZodiac } from "@/components/fortune/BirthZodiac";
import { supabase } from "@/libs/supabase/client";
import { Tables } from "@/types/database.types";
type Fortune = Tables<"fortune">;
const FortunePage = () => {
  const [selectedFortune, setSelectedFortune] = useState<Fortune | null>(null);

  const fetchTableData = async () => {
    try {
      const birth: string = await getUserBirth();
      const zodiac = calculateBirthZodiac(birth);

      const { data: fortune, error } = await supabase
        .from("fortune")
        .select("*")
        .eq("name", zodiac.name);
      if (error) {
        throw error;
      }
      if (fortune && fortune.length > 0) {
        setSelectedFortune(fortune[0]);
      }
    } catch (error) {
      console.error("Error fetching data from Supabase:", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="mt-7 flex w-full justify-center items-center min-h-screen ">
      {selectedFortune && (
        <FortunePinContainer imageUrl={selectedFortune.imgUrl}>
          <div className="p-8 bg-black bg-opacity-50 rounded-lg shadow-md w-[350px] md:w-[550px]">
            <Meteors number={20} />
            <div className="text-center mb-4 ">
              <h2 className="fortune-title font-bold text-3xl bg-gradient-to-t from-[#4C17BF] to-[#51FFCB] text-transparent bg-clip-text tracking-widest">
                {selectedFortune.name}
              </h2>
              <p className="fortune-title text-sm">{selectedFortune.month}</p>
            </div>
            <div>
              <h3 className="fortune-content bg-gradient-to-t from-[#4C17BF] to-[#51FFCB] text-transparent bg-clip-text text-lg font-semibold mb-2">
                별자리 성격
              </h3>
              <p>{selectedFortune.personality}</p>
            </div>
            <div>
              <h3 className="fortune-content bg-gradient-to-t from-[#4C17BF] to-[#51FFCB] text-transparent bg-clip-text text-lg font-semibold mb-2">
                총 운
              </h3>
              <p>{selectedFortune.horoscope_every}</p>
            </div>
            <div>
              <h3 className="fortune-content bg-gradient-to-t from-[#4C17BF] to-[#51FFCB] text-transparent bg-clip-text text-lg font-semibold mb-2">
                금전 운
              </h3>
              <p>{selectedFortune.horoscope_money}</p>
            </div>
            <div>
              <h3 className="fortune-content bg-gradient-to-t from-[#4C17BF] to-[#51FFCB] text-transparent bg-clip-text text-lg font-semibold mb-2">
                연애 운
              </h3>
              <p>{selectedFortune.horoscope_love}</p>
            </div>
          </div>
        </FortunePinContainer>
      )}
    </div>
  );
};

export default FortunePage;
