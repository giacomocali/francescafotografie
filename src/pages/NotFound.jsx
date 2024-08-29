import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

export function NotFound() {
  return (
    <>
      <div id="generic-bg" class="overflow-x-hidden">
        <Navbar1 nested={false} />
        <section class="pt-20" id="main-section">
          <div class="flex justify-around items-center mx-64 mt-52 text-white">
            <div>
              <h1 class="text-8xl mb-3 text-red-600"> Errore 404! </h1>
              <div class="text-5xl mb-10">
                La risorsa che stai cercando non esiste: potrebbe
                essere stata rimossa o spostata.
              </div>
              <a
                class="text-3xl hover:text-neutral-500 bg-white bg-opacity-10 rounded-3xl p-3"
                href="/"
              >
                Torna alla home page
              </a>
            </div>

            <div>
              <img
                src="/images/notfound.png"
                alt="pagina non esiste"
                class="w-full"
              />
            </div>
          </div>
        </section>
        <Footer2 />
      </div>
    </>
  );
}
