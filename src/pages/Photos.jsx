import Header from "../components/Headers";
import {
  battesimoLandscape,
  battesimoOther,
  battesimoPortrait,
  compleannoLandscape,
  compleannoPortrait,
  compleannoOther,
} from "../photoSources";
import { Suspense } from "preact/compat";

export function Photos({ photoCategory }) {
  switch (photoCategory) {
    case "battesimo":
      return galleryBase({ content: battesimoGallery() });
    case "compleanno":
      return galleryBase({ content: compleannoGallery() });
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
      fallback={
        <div class="text-7xl text-red-500">
          LOOOOOAAAAAADDDDIIIIIINNNNNNGGGGGGGG
        </div>
      }
    >
      <img src={src} alt="fotografia" class="w-auto outline outline-8 rounded-xl" />
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
          <div class="text-4xl text-purple-500">PORTRAIT</div>
          {battesimoPortrait.map((photo) => {
            return gridPhoto({ src: photo });
          })}
          {battesimoOther.map((photo) => {
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
          {compleannoOther.map((photo) => {
            return gridPhoto({ src: photo });
          })}
        </div>
      </article>
    </>
  );
}
