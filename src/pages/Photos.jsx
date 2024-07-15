import Navbar1 from "../components/Navbars";
import {
  battesimoRow123,
  battesimoRow4a,
  battesimoRow4b,
  battesimoRow5a,
  battesmioRow5b,
  battesimo2Landscape,
  battesimo2Portrait,
  compleannoLandscape,
  compleanno2Landscape,
  compleanno2Portrait,
  laureaPhotos,
  ritratto1Portrait,
  ritratto1Landscape,
  ritratto2Portrait,
  ritratto2Landscape1,
  ritratto2Landscape2,
  ritratto3Portrait,
} from "../photoSources";
import { Suspense } from "preact/compat";

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
    <>
      <Navbar1 nested={true} />
      <section id="generic-bg">
        <div id="gallery" class="w-full pt-36">
          {content}
        </div>
      </section>
    </>
  );
}
function galleryTitle({ title }) {
  return (
    <header class="flex w-full justify-center" data-aos="fade-in">
      <a href="/gallery" class="mx-7 w-10 absolute left-0 hover:brightness-50">
        <img src="../../src/assets/icons/arrow-left.png" alt="arrow back" />
      </a>
      <h1 class="text-center text-6xl font-medium mb-10">{title}</h1>
    </header>
  );
}

function gridPhoto({ src }) {
  return (
    <Suspense
      fallback={<img src="../../src/assets/loading0.gif" alt={"loading"} />}
    >
      <a
        class="spotlight self-center"
        href={src}
        data-aos="fade-in"
        data-aos-once="true"
        data-play="100"
        data-progress="true"
        data-title="false"
      >
        <img
          src={src}
          class="w-auto outline outline-8 outline-black"
          alt="fotografia"
        />
      </a>
    </Suspense>
  );
}

function gridPhotoSpan2({ src }) {
  return (
    <Suspense
      fallback={<img src="../../src/assets/loading0.gif" alt={"loading"} />}
    >
      <a
        class="spotlight self-center col-span-2"
        href={src}
        data-aos="fade-in"
        data-aos-once="true"
        data-play="100"
        data-progress="true"
        data-title="false"
      >
        <img
          src={src}
          class="w-auto outline outline-8 outline-black"
          alt="fotografia"
        />
      </a>
    </Suspense>
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
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {battesimoRow123.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {battesimoRow4a.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {gridPhotoSpan2({ src: battesimoRow4b })}
          {gridPhotoSpan2({ src: battesimoRow5a })}
          {gridPhoto({ src: battesmioRow5b })}
          <br />
        </div>

        <hr class="mb-10 mt-5 w-2/3 md:w-1/2 lg:w-1/2 mx-auto border-2" />

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {battesimo2Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {battesimo2Portrait.map((photo) => {
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
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {compleannoLandscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        {/* <hr class="my-16 w-2/3 md:w-1/2 lg:w-1/2 mx-auto border-2" /> */}
        <img
          src="../../src/assets/images/divider3.png"
          alt="divider pagina"
          class="mx-auto w-96 my-10"
        />
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
        >
          {compleanno2Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {compleanno2Portrait.map((photo) => {
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
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {laureaPhotos.map((photo) => {
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
        >
          {ritratto1Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}

          {ritratto1Landscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>

        <img
          src="../../src/assets/images/divider3.png"
          alt="divider pagina"
          class="mx-auto w-96 my-10"
        />

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
        >
          {ritratto2Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {gridPhoto({ src: ritratto2Landscape1 })}
          {gridPhoto({ src: ritratto2Landscape2 })}
        </div>

        <img
          src="../../src/assets/images/divider3.png"
          alt="divider pagina"
          class="mx-auto w-96 my-10"
        />

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
        >
          {ritratto3Portrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}
