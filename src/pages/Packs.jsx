import Header from "../components/Headers";
import Footer2 from "../components/Footer2";
import "../main.css";

import { PacketsCard } from "../components/Cards";

export default function Packs() {
  const baseCard = {
    title: "Pacchetto base",
    color: "base",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };
  const standardCard = {
    title: "Pacchetto standard",
    color: "standard",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };
  const premiumCard = {
    title: "Pacchetto premium",
    color: "premium",
    description:
      "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
    advantages: ["Vantaggio uno", "Vantaggio due", "Vantaggio tre"],
  };

  return (
    <div id="generic-bg">
      <Header nested={false}/>
      <section class="pt-40 text-white" id="main-section">
        <h1 class="text-6xl font-medium text-center mb-5" data-aos="zoom-out">
          Pacchetti
        </h1>
        <hr class="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-10" data-aos="fade-in"/>

        <div class="flex justify-center">
          <div class="flex justify-evenly">
            <PacketsCard {...baseCard} />
            <PacketsCard {...standardCard} />
            <PacketsCard {...premiumCard} />
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}
