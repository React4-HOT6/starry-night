import StarSignContainer from "@/components/starsign/StarSignContainer";
const StarSignPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  return (
    <div className="flex justify-center items-center ">
      <StarSignContainer />
    </div>
  );
};

export default StarSignPage;
