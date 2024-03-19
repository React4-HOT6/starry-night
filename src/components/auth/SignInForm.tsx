"use client";

const SignInForm = () => {
  return (
    <form className="flex flex-col justify-center items-center w-full">
      <input
        type="email"
        name="userId"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="ID"
      />
      <input
        type="password"
        name="password"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="PassWord"
      />
      <button className="p-2 border rounded-lg">Sign In</button>
    </form>
  );
};

export default SignInForm;
