import Link from "next/link";
import React from "react";
import SignInOutButton from "@/components/main/SignInOutButton";

const Header = () => {
  return (
    <header>
      <section>
        <Link href="/">Home</Link>
      </section>
      <nav>
        <Link href="/board">board</Link>
        <Link href="/fortune">fortune</Link>
        <Link href="/starsign">starsign</Link>
      </nav>
      <SignInOutButton />
    </header>
  );
};

export default Header;
