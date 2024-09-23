import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import { sources } from "../photoSources";
// import { Suspense, lazy } from "preact/compat";

export function Photos({ photoCategory }) {
  globalThis.scrollTo({ top: 0, left: 0 });

  switch (photoCategory) {
    case "battesimo":
      return galleryBase({ content: battesimoGallery() });
    case "compleanno":
      return galleryBase({ content: compleannoGallery() });
    case "laurea":
      return galleryBase({ content: laureaGallery() });
    case "ritratto":
      return galleryBase({ content: ritrattoGallery() });
    case "soulmates":
      return galleryBase({ content: soulmatesGallery() });
    default:
      return (
        <h1 class="text-red-600 text-center text-7xl mt-16">
          Client error! No content
        </h1>
      );
  }
}

function galleryBase({ content }) {
  return (
    <main className="bg4 text-black">
      <Navbar1 nested={true} />
      <div class="w-full pt-36">{content}</div>
      <Footer2 nested={true} />
    </main>
  );
}
function galleryTitle({ title }) {
  return (
    <header
      class="flex w-full justify-center gap-5 items-center mb-10"
      data-aos="fade-in"
    >
      <a href="/gallery" class="w-7 brightness-0 hover:brightness-50">
        <img src="/icons/arrow-left.png" alt="freccia indietro" />
      </a>
      <h1 class="text-center text-4xl md:text-6xl font-medium">{title}</h1>
    </header>
  );
}

function gridPhoto({ src }) {
  return (
    <a
      class="spotlight self-center"
      href={src}
      data-aos="zoom-in"
      data-play="100"
      data-progress="true"
      data-title="false"
    >
      <img src={src} class="w-auto" alt="fotografia" />
    </a>
  );
}

function gridPhotoSpan2({ src }) {
  return (
    <a
      class="spotlight self-center col-span-2"
      href={src}
      data-aos="fade-in"
      data-play="100"
      data-progress="true"
      data-title="false"
    >
      <img src={src} class="w-auto" alt="fotografia" />
    </a>
  );
}

function pageDivider() {
  return (
    <img
      class="mx-auto w-72 md:w-96 lg:w-96 xl:w-96 my-12"
      src="/images/divider4.png"
      alt="divider pagina"
    />
  );
}

// BATTESIMO =========================================================================
function battesimoGallery() {
  return (
    <>
      {galleryTitle({ title: "Battesimo" })}
      <article>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
          // data-aos-delay="200"
          // data-aos-once="true"
        >
          {sources.battesimoRow123.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {sources.battesimoRow4a.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {gridPhotoSpan2({ src: sources.battesimoRow4b })}
          {gridPhotoSpan2({ src: sources.battesimoRow5a })}
          {gridPhoto({ src: sources.battesmioRow5b })}
          <br />
        </div>

        {/* <hr class="mb-10 mt-5 w-2/3 md:w-1/2 lg:w-1/2 mx-auto border-2" /> */}
        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
          // data-aos-delay="200"
          // data-aos-once="true"
        >
          {sources.battesimo2Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {sources.battesimo2Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

// COMPLEANNO =========================================================================

function compleannoGallery() {
  return (
    <>
      {galleryTitle({ title: "Compleanni" })}
      <article>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
        >
          {sources.compleanno4Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {sources.compleanno4Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
        >
          {sources.compleanno3Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {sources.compleanno3Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
          // data-aos-delay="200"
          // data-aos-once="true"
        >
          {sources.compleannoLandscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          // data-aos="fade-in"
        >
          {sources.compleanno2Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {sources.compleanno2Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

// LAUREA =========================================================================

function laureaGallery() {
  return (
    <>
      {galleryTitle({ title: "Laurea" })}
      <article class="flex justify-evenly w-full">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2">
          {sources.laureaPhotos.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

// RITRATTO =========================================================================

function ritrattoGallery() {
  return (
    <>
      {galleryTitle({ title: "Ritratto" })}
      <article>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {sources.ritratto1Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {sources.ritratto1Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
        >
          {sources.ritratto2Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {gridPhoto({ src: sources.ritratto2Landscape1 })}
          {gridPhoto({ src: sources.ritratto2Landscape2 })}
        </div>

        {pageDivider()}

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
        >
          {sources.ritratto3Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

// SOULMATES ===========================================

function soulmatesGallery() {
  return (
    <>
      {galleryTitle({ title: "Soulmates" })}
      <article class="flex justify-evenly w-full">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2">
          {sources.soulmates.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}
