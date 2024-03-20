import Link from "next/link";
import React from "react";
import SignInOutButton from "@/components/main/SignInOutButton";

const Header = () => {
  return (
    <header className="fixed z-50 w-full top-0 bg-zinc-950">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Starry-night</a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/board">Board</Link>
            </li>
            <li>
              <Link href="/fortune">Fortune</Link>
            </li>
            <li>
              <Link href="/starsign">Starsign</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <SignInOutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
