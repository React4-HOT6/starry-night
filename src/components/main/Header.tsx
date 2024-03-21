import Link from "next/link";
import React from "react";
import SignInOutButton from "@/components/main/SignInOutButton";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="navbar fixed z-50 w-full top-0 bg-zinc-950 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950 rounded-box w-52"
          >
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
        <Link href="/" className="btn btn-ghost text-xl tracking-widest">
          STARRY NIGHT
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
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
      <div className="navbar-end hidden lg:flex">
        <SignInOutButton />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950 rounded-box w-52"
        >
          <li>
            <Link href="/signin" className="tracking-widest">
              SIGN IN
            </Link>
          </li>
          <li>
            <Link href="/signup" className="tracking-widest">
              SIGN UP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
