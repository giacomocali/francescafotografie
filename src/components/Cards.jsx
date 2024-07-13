import "../main.css";

// LANDING CARDS ================================================

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
        <p className="text-4xl"> {body} </p>
      </div>
    </div>
  );
}

// CONTACT CARD ================================================

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

// PACKETS CARD ================================================

export function PacketsCard({ title, color, description, advantages }) {
  var titleClass = "";

  switch (color) {
    case "base":
      titleClass = "base-card shadow-lg py-3 px-10 rounded-lg";
      break;
    case "standard":
      titleClass = "standard-card shadow-lg py-3 px-10 rounded-lg";
      break;
    case "premium":
      titleClass = "premium-card shadow-lg py-3 px-10 rounded-lg";
      break;
  }

  return (
    <div
      id="packets-card"
      data-aos="fade-in"
      data-aos-delay="200"
      class="p-5 m-5 bg-white text-neutral-900 text-center
          rounded-lg shadow-2xl min-w-72 max-w-80 relative"
    >
      <div class={titleClass}>
        <h2 className="text-xl text-center">{title}</h2>
      </div>

      <article className="text-xl text-center text-wrap mb-28">
        <div class="my-5">{description}</div>
        <ul class="mb-5">
          {advantages.map((advantage, index) => (
            <li key={index} class="flex my-2">
              <img
                src="./src/assets/images/placeholder.jpg"
                className="w-7 mr-5"
              />
              {advantage}
            </li>
          ))}
        </ul>
      </article>
      <a
        class="w-full absolute bottom-0 left-0 rounded-lg py-3
          flex items-center text-xl outline outline-green-300 outline-4
        bg-green-300 hover:bg-green-600 hover:outline-green-600 active:outline-0"
        href="https://wa.me/393883032432"
        target="_blank"
      >
        Per conoscere i prezzi, contattami su Whatsapp
        <img
          src="./src/assets/icons/whatsapp-icon-colored.png"
          alt="whatsapp icon"
          class="w-10 h-10 mr-3"
        />
      </a>
    </div>
  );
}

export function PacketsCard2({ title, color, description }) {
  var bgClass = "shadow-2xl z-0 w-1/4 min-h-96 rounded-3xl text-neutral-800 text-center mx-5 hover:w-1/3";
  switch (color) {
    case "pack1":
      bgClass = bgClass + " bg-orange-300";
      break;
    case "pack2":
      bgClass = bgClass + " bg-blue-300";
      break;
    case "pack3":
      bgClass = bgClass + " bg-purple-300";
      break;
  }

  return (
    <div class={bgClass} data-aos="fade-in" data-aos-delay="200">
      <h2 class="flex justify-between text-4xl text-left ml-5 text-white mt-5 h-1/3">
        {title}
        <img
          src="./src/assets/images/camera5.png"
          class="-z-20 scale-150 mr-10 max-w-36 max-h-36"
          alt="icona fotocamera"
        />
      </h2>

      <div class="bg-white h-full pt-7 px-8 rounded-3xl text-xl z-50 shadow-2xl">
        {Array.isArray(description)
          ? description.map((desc, index) => {
              {return <p key={index} class="w-full"> {desc} </p>}
            })
          : null}
      </div>
    </div>
  );
}
