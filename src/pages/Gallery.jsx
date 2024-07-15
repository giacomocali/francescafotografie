import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

export default function Gallery({ setPhotoCategory }) {
  globalThis.scrollTo({ top: 0, left: 0 });
  return (
    <div id="generic-bg">
      <Navbar1 nested={false} />
      <section class="pt-32" id="main-section">
        <h1
          class="text-6xl text-center text-white font-medium"
          data-aos="zoom-out"
        >
          Galleria
        </h1>
        {/* <hr class="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-10" data-aos="fade-in" /> */}
        <img src="./src/assets/images/divider3.png" alt="divider pagina" class="mx-auto w-96 mb-10"/>

        <div data-aos="fade-in" data-aos-delay="200">
          <GalleryStripe
            text={"Reportage battesimo"}
            category={"battesimo"}
            setCategory={setPhotoCategory}
          />
          <GalleryStripe
            text={"Reportage compleanno"}
            category={"compleanno"}
            setCategory={setPhotoCategory}
          />
          <GalleryStripe
            text={"Reportage Laurea"}
            category={"laurea"}
            setCategory={setPhotoCategory}
          />
          <GalleryStripe
            text={"Ritratto"}
            category={"ritratto"}
            setCategory={setPhotoCategory}
          />
          <Footer2 />
        </div>
      </section>
    </div>
  );
}

function GalleryStripe({ text, category, setCategory }) {
  function handleClick(event) {
    setCategory(category);
  }

  return (
    <a href="/gallery/photos" onClick={(event) => handleClick(event)}>
      <div
        id={`stripe-${category}`}
        class="gallery-stripe flex justify-center items-center 
            w-full py-20 md:py-36 lg:py-52 relative z-10"
      >
        <StripeText text={text} />
      </div>
    </a>
  );
}

function StripeText({ text }) {
  return (
    <h3 className="text-5xl md:text-7xl lg:text-7xl text-white text-center font-light">
      {text}
    </h3>
  );
}
