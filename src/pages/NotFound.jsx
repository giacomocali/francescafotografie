import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

export function NotFound() {
  return (
    <>
      <div id="generic-bg">
      <Navbar1 nested={false}/>
      <section class="pt-20" id="main-section">
        <div class="flex justify-around items-center mx-64 mt-52 text-white">
          <div>
            <h1 class="text-8xl mb-3 text-red-500"> Errore 404! </h1>
            <div class="text-5xl mb-5"> La pagina che stai cercando non esiste: potrebbe essere stata rimossa o spostata. </div>
            <a class="text-3xl hover:text-neutral-500 bg-white bg-opacity-10 rounded-2xl p-1" href="/"> Torna alla home page </a>
          </div>

          <div>
            <img
              src="./src/assets/icons/detective.png"
              alt="immagine detective"
              class="w-96"
            />
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
    </>
  );
}
