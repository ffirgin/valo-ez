import Link from "next/link";

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
  return (
    <div className="flex justify-between border-b border-valorant-line bg-valorant-ink/80 backdrop-blur">
      <div className="ml-4">
        {menuItems.map((item) => (
          <Link
            key={item.menu}
            href={item.link}
            className="inline-block font-bold uppercase tracking-wide py-5 px-2 mx-4 text-valorant-white transition hover:text-valorant-red"
          >
            {item.menu}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
