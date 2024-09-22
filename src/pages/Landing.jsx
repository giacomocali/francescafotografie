import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2.jsx";
import { Link } from "../components/Links";

export default function Landing() {
  globalThis.scrollTo({ top: 0, left: 0 });
  
  const carouselProperties={
    autoPlay:true,
    interval: 1000,
    centerMode:true,
    emulateTouch:true,
    dynamicHeight:true,
    infiniteLoop:true,
    useKeyboardArrows:true,
  };

  return (
    <main class="w-screen bg4 bg-properties text-black overflow-x-hidden">
      <Navbar1 nested={false} />
      <section className="flex items-center justify-center" id="main-section">
        <img
          src="cameraa.png"
          className="absolute rotate-12 bg-center opacity-20 w-4/5 md:w-2/5"
          alt="camera"
        />
        <LandingContent
          header="Francesca Calì"
          body="I miei scatti le vostre emozioni"
        />
      </section>

      <article className="w-screen p-10 mx-auto">

      </article>

      <Footer2 nested={false} />
    </main>
  );

  function landingPhoto({ src }) {
    return (
      <img
        src={src}
        alt="foto"
        className="more-rounded outline-dashed outline-white my-2"
      />
    );
  }
}

function LandingContent({ header, body }) {
  return (
    <div
      className="px-7 py-7 z-40"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1300"
    >
      <div className="mb-10 text-center">
        <h1 className="playwrite text-4xl md:text-5xl lg:text-7xl xl:text-7xl mb-4">
          {header}
        </h1>
        <p className="text-xl md:text-3xl lg:text-3xl mb-10"> {body} </p>
        <Link text="Galleria" type="standard" useAos={true} href={"/gallery"} />
        <Link text="Pacchetti" type="standard" useAos={true} href={"/packs"} />
      </div>
    </div>
  );
}
