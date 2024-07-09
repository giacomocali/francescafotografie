import Header from "../components/Headers";
import Footer2 from "../components/Footer2";
import "../main.css";

import { PacketsCard, PacketsCard2 } from "../components/Cards";

export default function Packs() {
  const baseCard = {
    title: "Reportage",
    color: "pack1",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };
  const standardCard = {
    title: "Ritratto",
    color: "pack2",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };
  const premiumCard = {
    title: "Dolci storie a domicilio",
    color: "pack3",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };

  return (
    <div id="generic-bg">
      <Header nested={false} />
      <section class="pt-32 text-white" id="main-section">
        <h1 class="text-6xl font-medium text-center mb-5" data-aos="zoom-out">
          Pacchetti
        </h1>
        <hr class="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-7" data-aos="fade-in" />
        <p class="text-xl text-center mb-7">
          In tutti i pacchetti è compresa la postproduzione e consegna delle
          foto in formato digitale entro 7 giorni dalla data dell’evento.
        </p>

        <div class="flex justify-center">
          <PacketsCard2 {...baseCard} />
          <PacketsCard2 {...standardCard} />
          <PacketsCard2 {...premiumCard} />
        </div>
      </section>
      <Footer2 />
    </div>
  );
}
