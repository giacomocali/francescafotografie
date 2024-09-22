import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import { ContactCard, ContactButton } from "../components/Cards";

import ClipboardJS from "clipboard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Contact() {
  globalThis.scrollTo({ top: 0, left: 0 });

  var clipboard = new ClipboardJS(".copy-btn");

  clipboard.on("success", function (e) {
    var originalContent = e.trigger.innerHTML;

    console.log("copiato");

    e.clearSelection();
    e.trigger.textContent = "Copiato!";

    setTimeout(() => {
      e.trigger.innerHTML = originalContent;
    }, 1000);
  });
  clipboard.on("error", function (e) {
    console.error("errore");
  });

  const contactSettings = {
    dots: true, // Shows dots for navigation
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Number of cards to show at once (adjust for desktop)
    slidesToScroll: 1, // Number of cards to scroll at once
    customPaging: () => (
      <div className="w-3 h-3 bg-black rounded-full mt-2"> </div>
    ),
    responsive: [
      {
        breakpoint: 768, // For mobile responsiveness
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main class="bg4 bg-properties h-screen text-black">
      <Navbar1 nested={false} />

      <section class="pt-20" id="main-section">
        <div class="py-10">
          <h2
            class="w-full text-4xl md:text-6xl lg:text-7xl text-center font-medium"
            data-aos="zoom-out"
          >
            Contatti

          </h2>
          <img
            src="/images/divider4.png"
            alt="divider pagina"
            class="mx-auto w-72 md:w-96 mt-2 mb-5"
          />

          <div className="flex w-screen justify-center items-center md:hidden my-5">
            <p className="text-xl"> Scorri </p>
            <img src="icons/scroll-arrow.png" className="ml-2 w-5"/>
          </div>

          <div
            class="hidden md:flex md:justify-center"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <ContactButton type={"whatsapp"} />
            <ContactButton type={"instagram"} />
          </div>

          <div className="md:hidden">
            <Slider {...contactSettings}>
              <ContactButton type={"whatsapp"} />
              <ContactButton type={"instagram"} />
            </Slider>
          </div>
        </div>
      </section>

      <Footer2 />
    </main>
  );
}
