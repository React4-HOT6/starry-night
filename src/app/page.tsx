import { BackgroundBeams } from "@/components/main/BackgroundBeams";
import TypingAnimation from "@/components/main/TypingAnimation";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <TypingAnimation />
      <BackgroundBeams />
    </>
  );
};

export default Home;
