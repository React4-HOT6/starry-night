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
        <Link href="/board">Board</Link>
        <Link href="/fortune">Fortune</Link>
        <Link href="/starsign">Starsign</Link>
        <Link href="/company">Company</Link>
      </nav>
      <SignInOutButton />
    </header>
  );
};

export default Header;
