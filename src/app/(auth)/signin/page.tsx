import SignInForm from "@/components/auth/SignInForm";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center w-96">
      <div className="flex flex-col items-center mb-5">
        <h1 className="mb-5 text-2xl">Welcome to starry-night</h1>
        <p className="text-base">별자리에 대한 정보를 알려드리는</p>
        <p className="text-base">저희 starry-night에 오신 것을환영합니다!</p>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
