import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import "../main.css";

import { PacketsCard, PacketsCard2 } from "../components/Cards";

export default function Packs() {
  const pack1 = {
    title: "Reportage",
    color: "pack1",
    description: [
      `Base: 3 ore di scatti`,
      `Plus: 5 ore di scatti`,
      "Comprende: foto di gruppo, foto individuali del festeggiato e scatti durante il corso dell’evento. Il tuo compito sarà quello di divertirti insieme alle persone a cui vuoi più bene, il mio sarà quello di immortalare i momenti più genuini e raccontare attraverso le immagini la magia del tuo evento!",
    ],
  };
  const pack2 = {
    title: "Ritratto",
    color: "pack2",
    description: [
      "1 ora di scatti all’aperto con possibilità di cambiare outfit.",
      "La location del servizio fotografico è a scelta tra l'azienda agricola Belvedere Colle Mattia e i Pratoni del Vivaro.",
      "Qualunque location sceglierai dovrai semplicemente immergerti nella natura e lasciare che io ti guidi verso la creazione di immagini romantiche e suggestive.",
      "Su richiesta si può scegliere una location differente. È possibile fare questo servizio fotografico anche insieme al tuo partner o alla tua famiglia!",
    ],
  };
  const pack3 = {
    title: "Dolci storie a domicilio",
    color: "pack3",
    description:[
      "Questo pacchetto prevede 2 ore di scatti",
      "tra le mura della tua dolce dimora.",
      "Il mio scopo sarà quello di immortalare",
      "i momenti più genuini e rappresentativi",
      "della tua quotidianità per poi valorizzarli",
      "e romanticizzarli attraverso una galleria di",
      "immagini che sarà per te un ricordo speciale",
      "e rappresentativo di chi sei in questo momento",
      "della tua vita, come individuo, coppia o",
      "famiglia! Il progetto nasce dall’idea che la",
      "bellezza è presente soprattutto nelle piccole",
      "cose, nei momenti spontanei e in quei semplici",
      "gesti ai quali ci affezioniamo e che vorremmo",
      "portare per sempre nei nostri ricordi",
    ]
  };

  return (
    <>
      <div id="generic-bg" class="pb-96">
        <Navbar1 nested={false} />
        <section class="pt-32 text-white">
          <h1 class="text-6xl font-medium text-center" data-aos="zoom-out">
            Pacchetti
          </h1>

          <img
            src="./src/assets/images/divider3.png"
            alt="divider pagina"
            class="mx-auto w-96 mb-10"
          />
          {/* <hr class="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-7" data-aos="fade-in" /> */}

          <p class="text-xl text-center mb-7">
            In tutti i pacchetti è compresa la postproduzione e consegna delle
            foto in formato digitale entro 7 giorni dalla data dell’evento.
          </p>

          <div class="flex justify-center" data-aos="fade-in" data-aos-delay="200">
            <PacketsCard2 {...pack1} />
            <PacketsCard2 {...pack2} />
            <PacketsCard2 {...pack3} />
          </div>
        </section>
        {/* <a
          class="w-full absolute bottom-0 left-0 rounded-lg py-3 px-5
          flex justify-center items-center text-xl text-neutral-800 
          bg-white hover:bg-slate-300 active:bg-slate-400"
          href="https://wa.me/393883032432"
          target="_blank"
        >
          Per conoscere i prezzi, contattami su Whatsapp
          <img
          src="./src/assets/icons/whatsapp-icon-colored.png"
          alt="whatsapp icon"
          class="w-10 h-10 mx-3"
          />
        </a> */}
      </div>
      <Footer2 />
    </>
  );
}
