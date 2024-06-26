"use client";

import Link from "next/link";
import { SignIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../../public/VEZ-logos_transparent.png";

const menuItems = [
  {
    menu: "Home",
    link: "/",
  },
  {
    menu: "Agents",
    link: "/agents",
  },
  {
    menu: "Maps",
    link: "/maps",
  },
  // Still working on these areas
  // {
  //   menu: "Weapons",
  //   link: "/weapons",
  // },
  // {
  //   menu: "Guides",
  //   link: "/guides",
  // },
];

const NavBar = () => {
  const { user, isLoaded } = useUser();
  const displayMenu = () => {
    return menuItems.map((item) => (
      <Link
        key={item.menu}
        href={item.link}
        className="hover:text-slate-500 hover:drop-shadow font-bold py-5 px-2 rounded mx-4"
      >
        {item.menu}
      </Link>
    ));
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="ml-4 mt-4">{displayMenu()}</div>
        <div className="mr-4 mt-4">
          {isLoaded && user ? (
            <div className="flex gap-4">
              <Link
                className="hover:text-slate-500 hover:drop-shadow font-bold items-center justify-center"
                href="/userprofile"
              >
                Profile
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div>
              <Link
                className="hover:text-slate-500 hover:drop-shadow font-bold py-5 px-2 rounded mx-4"
                href="/signup"
              >
                Sign Up
              </Link>
              <Link
                className="hover:text-slate-500 hover:drop-shadow font-bold py-5 px-2 rounded mx-4"
                href="/login"
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
