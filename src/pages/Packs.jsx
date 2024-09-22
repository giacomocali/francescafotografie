import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import "../main.css";

import { PacketsCard3 } from "../components/Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const packSettings = {
  dots: true, // Shows dots for navigation
  infinite: false,
  speed: 500,
  slidesToShow: 1, // Number of cards to show at once (adjust for desktop)
  slidesToScroll: 1, // Number of cards to scroll at once
  customPaging: () => <div className="w-3 h-3 bg-black rounded-full mt-2"> </div>,
  responsive: [
    {
      breakpoint: 768, // For mobile responsiveness
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // For tablets
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Packs() {
  const pack1 = {
    title: "Reportage",
    color: "pack1",
  };
  const pack2 = {
    title: "Ritratto",
    color: "pack2",
  };
  const pack3 = {
    title: "Dolci storie a domicilio",
    color: "pack3",
  };
  function pack1_text() {
    return (
      <div class="mb-5">
        Base: <strong>3 ore di scatti</strong> <br />
        Plus: <strong>5 ore di scatti</strong> <br />
        <section class="mt-3">
          Comprende: <strong> foto di gruppo, foto individuali </strong>
          del festeggiato e{" "}
          <strong> scatti durante il corso dell’evento. </strong>
          Il tuo compito sarà quello di
          <em> divertirti </em> insieme alle persone a cui vuoi più bene, il mio
          sarà quello di immortalare i momenti più genuini e raccontare
          attraverso le immagini la magia del tuo evento!
        </section>
      </div>
    );
  }
  function pack2_text() {
    return (
      <div class="mb-5">
        <strong>1 ora di scatti all’aperto</strong> con possibilità di cambiare
        outfit. La location del servizio fotografico è a scelta tra l'azienda
        agricola
        <strong> Belvedere Colle Mattia </strong> e i{" "}
        <strong> Pratoni del Vivaro.</strong> Qualunque location sceglierai
        dovrai semplicemente immergerti nella natura e lasciare che io ti guidi
        verso la creazione di <strong>immagini romantiche e suggestive</strong>.
        Su richiesta si può scegliere una location differente. È possibile fare
        questo servizio fotografico anche insieme al tuo partner o alla tua
        famiglia!
      </div>
    );
  }
  function pack3_text() {
    return (
      <div class="mb-5">
        Questo pacchetto prevede{" "}
        <strong>2 ore di scatti tra le mura della tua dolce dimora.</strong> Il
        mio scopo sarà quello di immortalare i momenti più genuini e
        rappresentativi della tua quotidianità per poi valorizzarli e
        romanticizzarli attraverso una galleria di immagini che sarà per te un
        <strong>
          {" "}
          ricordo speciale e rappresentativo di chi sei in questo momento della
          tua vita
        </strong>
        , come individuo, coppia o famiglia! Il progetto nasce dall’idea che la{" "}
        <em>bellezza è presente soprattutto nelle piccole cose</em>, nei momenti
        spontanei e in quei semplici gesti ai quali ci affezioniamo e che
        vorremmo portare per sempre nei nostri ricordi
      </div>
    );
  }

  return (
    <>
      <main class="bg4 bg-properties pb-32 text-black">
        <Navbar1 nested={false} />
        <section class="pt-32 pb-20">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl text-center font-medium"
            data-aos="zoom-out"
            data-aos-once="true"
          >
            Pacchetti
          </h1>

          <img
            src="/images/divider4.png"
            alt="divider pagina"
            class="mx-auto w-72 md:w-96 mt-2 mb-5"
          />

          <p class="text-sm md:text-xl text-center mb-0 mx-5 md:mx-0 md:mb-10">
            In tutti i pacchetti è compresa la postproduzione e consegna delle
            foto in formato digitale entro 7 giorni dalla data dell’evento.
          </p>

          <div className="flex w-screen justify-center items-center md:hidden mt-5">
            <p className="text-xl"> Scorri </p>
            <img src="icons/scroll-arrow.png" className="ml-2 w-5"/>
          </div>

          <div
            class="w-fit mx-16 hidden md:grid grid-cols-3 grid-rows-1"
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <PacketsCard3
              title={pack1.title}
              color={pack1.color}
              description={pack1_text()}
            />
            <PacketsCard3
              title={pack2.title}
              color={pack2.color}
              description={pack2_text()}
            />
            <PacketsCard3
              title={pack3.title}
              color={pack3.color}
              description={pack3_text()}
            />
          </div>

          <div className="block md:hidden">
            <Slider {...packSettings}>
              <PacketsCard3
                title={pack1.title}
                color={pack1.color}
                description={pack1_text()}
              />
              <PacketsCard3
                title={pack2.title}
                color={pack2.color}
                description={pack2_text()}
              />
              <PacketsCard3
                title={pack3.title}
                color={pack3.color}
                description={pack3_text()}
              />
            </Slider>
          </div>

        </section>
      </main>
      <Footer2 />
    </>
  );
}
