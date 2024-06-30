import "../main.css";
import { Link } from "./Links";

export function LandingCard({ header, body }) {
  return (
    <div
      className="text-white px-7 py-7"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="mb-10 text-center">
        <h1 className="playwrite text-7xl mb-4"> {header} </h1>
        <p className="urbanist text-4xl mb-10"> {body} </p>
        <Link
          text="Pacchetti"
          type="standard"
          useAos={true}
          href={"/services"}
        />
        <Link
          text="Galleria"
          type="standard"
          useAos={true}
          href={"/portfolio"}
        />
      </div>
    </div>
  );
}

export function LandingCardTransparent({ header, body }) {
  return (
    <div
      className="rounded-xl bg-white bg-opacity-10 
            backdrop-blur-sm text-white px-7 py-7"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="mb-20">
        <h1 className="playwrite text-6xl mb-4"> {header} </h1>
        <p className="urbanist text-4xl"> {body} </p>
      </div>
    </div>
  );
}

export function PortfolioCard({ text }) {
  return (
    <div
      id="portfolio-card"
      class="-z-0 flex justify-center items-center lg:w-96 lg:h-96 md:w-96 md:h-96 sm:w-50 sm:h-96"
    >
      <h3 className="text-5xl text-white z-10"> {text} </h3>
    </div>
  );
}

export function ContactCard({ text }) {
  return (
    <div
      id="contact-card"
      class="-z-0 flex justify-center items-center lg:w-96 lg:h-96 md:w-96 md:h-96 sm:w-50 sm:h-96"
    >
      <h3 className="text-5xl text-white z-10"> {text} </h3>
    </div>
  );
}

export function PacketsCard({ title, color, description, advantages }) {
  var titleClass = "";

  switch (color) {
    case "base":
      titleClass = "bg-neutral-300 shadow-lg py-3 px-10 rounded-lg";
      break;
    case "standard":
      titleClass = "bg-blue-300 shadow-lg py-3 px-10 rounded-lg";
      break;
    case "premium":
      titleClass = "bg-yellow-300 shadow-lg py-3 px-10 rounded-lg";
      break;
  }

  return (
    <div
      id="packets-card"
      data-aos="fade-in"
      data-aos-delay="300"
      class="p-5 m-5 items-center bg-white text-black text-center
          rounded-lg shadow-2xl max-w-72"
    >
      <div class={titleClass}>
        <h2 className="text-2xl text-center text-neutral-800">{title}</h2>
      </div>



      <article className="text-xl text-center text-wrap max-w-60">
        
        <div class="my-5">{description}</div>
        <ul>
          {advantages.map((advantage, index) => (
            <li key={index}>
              <img
                src="../assets/images/placeholder.jpg"
                className="w-3"
              />
              {advantage}{" "}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
