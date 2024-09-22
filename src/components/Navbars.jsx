import "../main.css";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "preact/hooks";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  var instagramSrc = "/icons/instagram-icon-colored.png";
  var whatsappSrc = "/icons/whatsapp-icon-colored.png";
  var drawerSrc = "/icons/hamburger-menu.png";

  return (
    <>
      <nav
        className="backdrop-blur-lg fixed z-40 w-screen py-7 text-lg"
        id="main-nav"
      >
        <div className="flex justify-around items-center font-light">
          <button
            onClick={toggleDrawer}
            class="sm:hidden md:hidden lg:hidden xl:hidden"
          >
            <img
              src={drawerSrc}
              alt="immagine"
              class="w-8 link-transition2 active:brightness-50 transition-all duration-75"
            />
          </button>

          <a
            href="/"
            className="mr-16 playwrite font-medium text-2xl link-transition2"
          >
            Francesca Fotografie
          </a>

          <div className="text-2xl hidden sm:flex items-center space-x-2">
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
              href="https://www.instagram.com/francesca_fotografie/"
              target="_blank"
            >
              <img
                src={instagramSrc}
                alt="logo instagram"
                class="w-12 md:w-10 link-transition2 mx-1 rounded-full"
              />
            </a>
            <a href="https://wa.me/393883032432" target="_blank">
              <img
                src={whatsappSrc}
                alt="logo whatsapp"
                class="w-12 md:w-10 link-transition2 mx-1 rounded-full"
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
        <div class="bg-neutral-900 text-white p-10 w-full h-full">
          <button onClick={toggleDrawer}>
            <img
              class="w-16 active:brightness-50 link-transition2"
              src="/icons/close-icon.png"
              alt="close button"
            />
          </button>

          <ul class="mt-10 ml-5 text-4xl">
            <li class="drawer-link my-4 link-transition2">
              <a href="/"> Home </a>
            </li>

            <li class="drawer-link my-4 link-transition2">
              <a href="/gallery"> Galleria </a>
            </li>

            <li class="drawer-link my-4 link-transition2">
              <a href="/packs"> Pacchetti </a>
            </li>

            <li class="drawer-link my-4 link-transition2">
              <a href="/about"> Chi sono </a>
            </li>

            <li class="drawer-link my-4 link-transition2">
              <a href="/contatti"> Contatti </a>
            </li>
          </ul>

          {/* LINK SOCIAL */}
          <ul class="flex mt-10">
            <li>
              <a href="https://www.instagram.com/francesca_fotografie/">
                <img
                  class="w-14 mx-5"
                  src="/icons/instagram-icon.png"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/393883032432">
                <img
                  class="w-14"
                  src="/icons/whatsapp-icon.png"
                  alt="whatsapp icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
