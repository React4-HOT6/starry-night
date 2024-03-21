import StarSignContainer from "@/components/starsign/StarSignContainer";
import { Meteors } from "@/components/ui/meteors";
const StarSignPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Meteors />
      <StarSignContainer />
    </div>
  );
};

export default StarSignPage;
