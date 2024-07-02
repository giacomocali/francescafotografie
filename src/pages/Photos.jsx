import Header from "../components/Headers";
import * as sources from "../photoSources";

// const filesContext = require.context('../assets/images/battesimo/', true, /landscape\d+\.jpg$/);
export function Photos({ photoCategory }) {
  // for(key in filesContext.keys()){
  //     console.log(filesContext.keys()[key]);
  // }

  switch (photoCategory) {
      case "battesimo":
          return galleryBase({ content: battesimoGallery() });
          case "compleanno":
              return galleryBase({ content: compleannoGallery() });
              default:
                  return (
                      <h1 class="text-red-600 text-center text-7xl mt-16">
          {" "}
          Client error! No content{" "}
        </h1>
      );
    }
}

function galleryBase({ content }) {
    return (
        <section id="generic-bg">
      <Header />
      <div id="gallery" class="w-full pt-64">
        {content}
      </div>
    </section>
  );
}
function galleryTitle({ title }) {
    return <h1 class="text-center text-7xl text-blue-600"> {title} </h1>;
}

// usare .map e for loop vari per ogni immagine
function battesimoGallery() {
  return (
    <>
      <galleryTitle title="Foto battesimo" />
      <article>Sezione article</article>
    </>
  );
}

function compleannoGallery() {
  return <h1 class="text-center text-7xl text-blue-600"> Foto compleanno </h1>;
}
