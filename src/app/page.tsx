import { BackgroundBeams } from "@/components/main/BackgroundBeams";
import TypingAnimation from "@/components/main/TypingAnimation";
import Image from "next/image";

const Home: React.FC = () => {
  const text =
    "별자리의 매력에 빠져보세요! -\n매일의 운세, 별자리에 대한 깊은 통찰,\n그리고 생생한 커뮤니티를 경험하세요.";
  return (
    <>
      <TypingAnimation text={text} speed={100} />
      <BackgroundBeams />
    </>
  );
};

export default Home;
