import "../main.css";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "preact/hooks";

export default function Navbar1({ nested }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  var instagramSrc = "";
  var whatsappSrc = "";
  if (nested) {
    instagramSrc = "../../src/assets/icons/instagram-icon.png";
    whatsappSrc = "../../src/assets/icons/whatsapp-icon.png";
  } else {
    instagramSrc = "./src/assets/icons/instagram-icon.png";
    whatsappSrc = "./src/assets/icons/whatsapp-icon.png";
  }

  return (
    <>
      <nav
        className="backdrop-blur-lg fixed z-40 w-full py-7 text-white text-lg"
        id="main-nav"
      >


        <div className="flex justify-center md:justify-around lg:justify-around xl:justify-around items-center font-light">
          <button onClick={toggleDrawer}>
            <img
              src="./src/assets/icons/hamburger-menu.png"
              alt="immagine"
              class="w-8 absolute mt-8 ml-6 left-0 top-0 link-transition2 md:hidden lg:hidden xl:hidden"
            />
          </button>
          <a
            href="/"
            className="playwrite flex items-center p-2 text-2xl link-transition2"
          >
            Memorie di luce
          </a>

          <div className="text-2xl hidden sm:flex sm:items-center sm:space-x-6">
            <a href="/gallery" className="px-4 py-2 link-transition2">
              Galleria
            </a>
            <a href="/packs" className="px-4 py-2 link-transition2">
              Pacchetti
            </a>
            <a href="/about" className="px-4 py-2 link-transition2">
              Chi sono
            </a>
            <a href="/contatti" className="px-4 py-2 link-transition2">
              Contatti
            </a>
            <a
              href="https://www.instagram.com/francescacali.ph/"
              target="_blank"
            >
              <img
                src={instagramSrc}
                alt="logo instagram"
                class="w-6 link-transition2"
              />
            </a>
            <a href="https://wa.me/393883032432" target="_blank">
              <img
                src={whatsappSrc}
                alt="logo whatsapp"
                class="w-6 link-transition2"
              />
            </a>
          </div>
        </div>
      </nav>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        size={"100%"}
        direction="left"
        lockBackgroundScroll={true}
      >
        <div class="bg-neutral-800 p-10 w-full h-full">
          <button onClick={toggleDrawer}>
            {" "}
            <img
              class="w-14"
              src="./src/assets/icons/close-icon.png"
              alt="close button"
            />{" "}
          </button>
          <ul class="mt-10 ml-5 text-3xl">
            <li class="my-2 link-transition2">
              {" "}
              <a href="/"> Home </a>{" "}
            </li>
            <li class="my-2 link-transition2">
              {" "}
              <a href="/gallery"> Galleria </a>{" "}
            </li>
            <li class="my-2 link-transition2">
              {" "}
              <a href="/packs"> Pacchetti </a>{" "}
            </li>
            <li class="my-2 link-transition2">
              {" "}
              <a href="/about"> Chi sono </a>{" "}
            </li>
            <li class="my-2 link-transition2">
              {" "}
              <a href="/contatti"> Contatti </a>{" "}
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
