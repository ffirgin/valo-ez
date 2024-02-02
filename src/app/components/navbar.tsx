import Link from "next/link";
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
  {
    menu: "Guides",
    link: "/guides",
  },
];

const NavBar = () => {
  const displayMenu = () => {
    return menuItems.map((item) => (
      <Link
        key={item.menu}
        href={item.link}
        className="hover:text-white hover:drop-shadow font-bold py-5 px-2 rounded mx-4"
      >
        {item.menu}
      </Link>
    ));
  };

  return (
    <>
      <div className="bg-white text-black flex justify-center items-center">
        <div className="flex justify-center ">{displayMenu()}</div>
      </div>
    </>
  );
};

export default NavBar;
