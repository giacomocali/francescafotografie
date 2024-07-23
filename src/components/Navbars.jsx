import "../main.css";
import anime from "animejs";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "preact/hooks";

export default function Navbar1({ nested }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (isOpen) {
    // anime({
    //   targets: ".drawer-link",
    //   opacity: 100,
    //   duration: 1000,
    //   delay: anime.stagger(100, {start:500}, {easing: "easeOutExpo"}),
    // });
  }

  var instagramSrc = "./src/assets/icons/instagram-icon.png";
  var whatsappSrc = "./src/assets/icons/whatsapp-icon.png";
  var drawerSrc = "./src/assets/icons/hamburger-menu.png";

  if (nested) {
    instagramSrc = "../../src/assets/icons/instagram-icon.png";
    whatsappSrc = "../../src/assets/icons/whatsapp-icon.png";
    drawerSrc = "../../src/assets/icons/hamburger-menu.png";
  }

  return (
    <>
      <nav
        className="backdrop-blur-lg fixed z-40 w-full py-7 text-white text-lg"
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
              class="w-8 shrink link-transition2 active:brightness-50 transition-all duration-75"
            />
          </button>

          <a
            href="/"
            className="mr-16 playwrite font-medium text-2xl link-transition2"
          >
            Francesca Fotografie
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
              href="https://www.instagram.com/francesca_fotografie/"
              target="_blank"
            >
              <img
                src={instagramSrc}
                alt="logo instagram"
                class="w-10 md:w-8 lg:w-6 xl:w-6 link-transition2"
              />
            </a>
            <a href="https://wa.me/393883032432" target="_blank">
              <img
                src={whatsappSrc}
                alt="logo whatsapp"
                class="w-10 md:w-8 lg:w-6 xl:w-6 link-transition2"
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
            <img
              class="w-14 active:brightness-50 link-transition2"
              src="./src/assets/icons/close-icon.png"
              alt="close button"
            />
          </button>

          <ul class="mt-10 ml-5 text-3xl">
            <li class="drawer-link my-2 link-transition2">
              <a href="/"> Home </a>
            </li>

            <li class="drawer-link my-2 link-transition2">
              <a href="/gallery"> Galleria </a>
            </li>

            <li class="drawer-link my-2 link-transition2">
              <a href="/packs"> Pacchetti </a>
            </li>

            <li class="drawer-link my-2 link-transition2">
              <a href="/about"> Chi sono </a>
            </li>

            <li class="drawer-link my-2 link-transition2">
              <a href="/contatti"> Contatti </a>
            </li>
          </ul>

          {/* LINK SOCIAL */}
          <ul class="flex mt-10">
            <li>
              <a href="https://www.instagram.com/francesca_fotografie/">
                <img
                  class="w-14 mx-5"
                  src="./src/assets/icons/instagram-icon.png"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/393883032432">
                <img
                  class="w-14"
                  src="./src/assets/icons/whatsapp-icon.png"
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
