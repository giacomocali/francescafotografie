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

export function ContactCard({ type }) {
  var content = {};
  switch (type) {
    case "email":
      content = {
        title: "Email",
        text_to_copy: "califrancescaph@gmail.com",
        cls: "contact-mail",
      };
      break;
    case "whatsapp":
      content = {
        title: "WhatsApp",
        text_to_copy: "https://wa.me/393883032432",
        cls: "contact-whatsapp",
      };
      break;
    case "instagram":
      content = {
        title: "Instagram",
        text_to_copy: "https://www.instagram.com/francesca_fotografie/",
        cls: "contact-instagram",
      };
      break;
    default:
      content = {
        title: "error",
        text_to_copy: "",
        cls: "",
      };
      break;
  }
  return ContactCardBase({ content });
}

export function ContactCardBase({ content }) {
  var specificClass = "py-24 bg-cover bg-no-repeat bg-center " + content.cls;
  console.log(specificClass);
  return (
    <button
      data-clipboard-text={content.text_to_copy}
      id="contact-card"
      class="copy-btn -z-0 mx-5 
      active:scale-90 transition-transform duration-75 
      min-w-64 md:w-64
      px-10 md:px-0 default-card-bg"
    >
      <div class={specificClass}>
        {/* add the bg image class here */}
        <h3 className="text-center text-5xl z-10 p-2">{content.title}</h3>
        <small class="italic text-center text-lg"> Clicca per copiare </small>
      </div>
    </button>
  );
}

export function ContactButton({ type }) {
  var href, title = "";
  var cls = "py-24 bg-cover bg-no-repeat bg-center ";
  switch (type) {
    case "whatsapp":
      title="WhatsApp"
      href = "https://wa.me/393883032432";
      cls = cls+"contact-whatsapp";
      break;
    case "instagram":
      title="Instagram"
      href = "https://www.instagram.com/francesca_fotografie/";
      cls = cls+"contact-instagram";
      break;
    default:
      break;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      id="contact-card"
      class="copy-btn -z-0 mx-5 active:scale-90
      transition-transform duration-75 min-w-64 md:w-64 px-10 md:px-0
      default-card-bg"
    >
      <div class={cls}>
        {/* add the bg image class here */}
        <h3 className="text-center text-5xl z-10 p-2">{title}</h3>
        <p class="italic text-center text-lg"> Collegamento ➚ </p>
      </div>
    </a>
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
  /* 
    big: w-1/4 h-98
    medium: w-1/2 h-52
    small:w-2/3 h-40
  */
  var bgClass =
    "z-0 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" +
    " lg:mb-10 h-fit" +
    " rounded-3xl text-neutral-800" +
    " text-center mx-5 transition-all hover:scale-110" +
    " hover:shadow-3xl";
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
    <div class={bgClass}>
      <h2 class="flex justify-between text-4xl text-left ml-5 text-white mt-5">
        {title}
        <img
          src="./src/assets/images/camera5.png"
          class="-z-20 scale-150 mr-10 max-w-32 max-h-32 "
          alt="icona fotocamera"
        />
      </h2>

      <div
        class="outline outline-white relative bg-white h-fit 
      text-md   md:text-lg   lg:text-xl
      pt-6 px-6 rounded-3xl z-10 shadow-3xl big-shadow py-28"
      >
        {Array.isArray(description)
          ? description.map((desc, index) => {
              {
                return (
                  <p key={index} class="w-full my-1">
                    {desc}
                  </p>
                );
              }
            })
          : null}

        <div class="absolute bottom-0 left-0 mb-5 ml-5 flex">
          <a
            class="wa-minibanner bg-green-300 rounded-full p-3 flex justify-center items-center"
            href="https://wa.me/393883032432"
            target="_blank"
          >
            <img
              class="w-16"
              src="./src/assets/icons/whatsapp-icon-colored.png"
              alt="whatsapp"
            />
            <p class="hidden">
              Per conoscere i prezzi, contattami su Whatsapp!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export function PacketsCard3({ title, color, description }) {
  /* 
    big: w-1/4 h-98
    medium: w-1/2 h-52
    small:w-2/3 h-40
  */
  var bgClass =
    " z-0 w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4" +
    " lg:mb-10 h-fit pb" +
    " rounded-3xl text-neutral-800" +
    " text-center mx-5 transition-all hover:scale-110";
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
    <div class={bgClass}>
      <h2 class="flex justify-between text-4xl text-left ml-5 text-white mt-5">
        {title}
        <img
          src="./src/assets/images/camera5.png"
          class="-z-20 scale-150 mr-10 max-w-32 max-h-32 "
          alt="icona fotocamera"
        />
      </h2>

      <div
        class="outline outline-white relative bg-white h-fit 
        text-md   md:text-lg   lg:text-xl
        mt-5 pt-6 px-6 rounded-3xl z-10 shadow-3xl big-shadow pb-28"
      >
        {description}

        <div class="absolute bottom-0 left-0 mb-5 ml-5 flex">
          <a
            class="wa-minibanner bg-green-300 rounded-full p-3 flex justify-center items-center"
            href="https://wa.me/393883032432"
            target="_blank"
          >
            <img
              class="w-16"
              src="./src/assets/icons/whatsapp-icon-colored.png"
              alt="whatsapp"
            />
            <p class="block xl:hidden">
              Per conoscere i prezzi, contattami su Whatsapp!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
