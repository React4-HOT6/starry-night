import StarSignContainer from "@/components/starsign/StarSignContainer";
const StarSignPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center  ">
      <StarSignContainer />
    </div>
  );
};

export default StarSignPage;
