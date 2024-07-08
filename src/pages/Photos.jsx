import Header from "../components/Headers";
import {
  battesimoLandscape,
  battesimoPortrait,
  compleannoLandscape,
  compleannoPortrait,
  laureaPhotos,
  ritrattoLandscape,
  ritrattoPortrait
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
      <Header nested={true} />
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

// GALLERIE =================================================================
// usare .map e for loop vari per ogni immagine
function battesimoGallery() {
  return (
    <>
      {galleryTitle({ title: "Battesimo" })}
      <article class="flex justify-evenly w-full">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {battesimoLandscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {battesimoPortrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

function compleannoGallery() {
  return (
    <>
      {galleryTitle({ title: "Compleanni" })}
      <article class="flex justify-evenly w-full">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {compleannoLandscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {compleannoPortrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}

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

function ritrattoGallery() {
  return (
    <>
      {galleryTitle({ title: "Ritratto" })}
      <article class="flex justify-evenly w-full">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {ritrattoLandscape.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {ritrattoPortrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}
