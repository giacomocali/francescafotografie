import Header from "../components/Headers";
import Footer2 from "../components/Footer2";
import "../main.css";

import { PacketsCard } from "../components/Cards";

export default function Services() {
    const baseCard = {
        title:"Pacchetto base",
        color: "base",
        description: "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
        advantages: [
            "Vantaggio uno",
            "Vantaggio due",
            "Vantaggio tre"
        ]
    }
    const standardCard = {
        title:"Pacchetto standard",
        color: "standard",
        description: "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
        advantages: [
            "Vantaggio uno",
            "Vantaggio due",
            "Vantaggio tre"
        ]
    }
    const premiumCard = {
        title:"Pacchetto premium",
        color: "premium",
        description: "Servizio di base per i clienti principali. Lorem ipsum dolor sit amet",
        advantages: [
            "Vantaggio uno",
            "Vantaggio due",
            "Vantaggio tre"
        ]
    }


  return (
    <div id="portfolio-bg">
      <Header />
      <section class="pt-36 text-white" id="main-section">
        <h1 class="text-5xl playwrite text-center mb-16"
        data-aos="fade-in"> Pacchetti </h1>

        <div class="flex justify-center">
          <div class="flex justify-evenly">
            <PacketsCard {...baseCard}/>
            <PacketsCard {...standardCard} />
            <PacketsCard {...premiumCard} />
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}
