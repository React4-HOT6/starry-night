import Link from "next/link";
import React from "react";
import SignInOutButton from "@/components/main/SignInOutButton";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed z-50 w-full top-0 bg-zinc-950">
      <div className="navbar">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            STARRY NIGHT
          </Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/board" className="tracking-widest">
                BOARD
              </Link>
            </li>
            <li>
              <Link href="/fortune" className="tracking-widest">
                FORTUNE
              </Link>
            </li>
            <li>
              <Link href="/starsign" className="tracking-widest">
                STARSIGN
              </Link>
            </li>
            <li>
              <Link href="/team" className="tracking-widest">
                TEAM
              </Link>
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
