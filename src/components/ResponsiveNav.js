import { useState } from "react";
import Button from "./Button";

const ResponsiveNav = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Mint", link: "/" },
    { name: "Tribe", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center bg-transparent justify-between py-4 px-7 md:px-10">
        <div className="font-bold text-white text-2xl cursor-pointer flex items-center font-titillium">
          LOGO
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-white right-8 top-5 cursor-pointer md:hidden font-bold"
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-19 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {links.map((link) => {
            return (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <Button>Connect</Button>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;
