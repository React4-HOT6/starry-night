"use client";
import {
  createClient,
  SupabaseClient,
  PostgrestResponse,
} from "@supabase/supabase-js";
import { useEffect } from "react";
import { Fortune } from "@/types";
import { FortunePinContainer } from "@/components/fortuneUI/fortuneContainer";
import { useState } from "react";
const FortunePage = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
  const [selectedFortune, setSelectedFortune] = useState<Fortune | null>(null);
  const fetchTableData = async () => {
    try {
      // Supabase에서 데이터를 조회합니다.
      const { data: fortune, error }: PostgrestResponse<Fortune> =
        await supabase.from("fortune").select("*").eq("id", 1);

      if (error) {
        throw error;
      }
      if (fortune && fortune.length > 0) {
        setSelectedFortune(fortune[0]);
      }
      // 데이터가 성공적으로 조회되었을 경우 콘솔에 출력합니다.
      console.log("Fetched data from Supabase:", fortune);
    } catch (error) {
      console.error("Error fetching data from Supabase:", error);
    }
  };

  // 컴포넌트가 마운트되었을 때 데이터를 가져오는 효과를 추가합니다.
  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {selectedFortune && (
        <FortunePinContainer imageUrl={selectedFortune.imgUrl}>
          <div className="p-8 bg-black bg-opacity-50 rounded-lg shadow-md w-[600px] ">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedFortune.name}</h2>
              <p className="text-sm text-gray-500">{selectedFortune.month}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Personality</h3>
              <p>{selectedFortune.personality}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Money Horoscope</h3>
              <p>{selectedFortune.horoscope_money}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Everyday Horoscope</h3>
              <p>{selectedFortune.horoscope_every}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Love Horoscope</h3>
              <p>{selectedFortune.horoscope_love}</p>
            </div>
            <img
              className="mx-auto mt-4 w-24 h-24 rounded-full"
              src={selectedFortune.imgUrl}
              alt={selectedFortune.name}
            />
          </div>
        </FortunePinContainer>
      )}
    </div>
  );
};

export default FortunePage;
