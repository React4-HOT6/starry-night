import SignUpForm from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center w-96">
      <div className="flex flex-col items-center mb-5">
        <h1 className="mb-5 text-2xl">Sign up starry-night</h1>
        <p className="text-base">회원가입에 필요한 정보를 입력해주세요.</p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
