import "../main.css";
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
      w-80 text-center
      md:w-60 md:px-0 default-card-bg"
    >
      <div class={specificClass}>
        <h3 className="text-5xl mx-auto z-10 p-2">{content.title}</h3>
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
      class="-z-0 md:mx-5 md:my-0 m-10 active:scale-90
      transition-transform duration-75 w-1/2 md:w-fit md:scale-100
      default-card-bg bg-center"
    >
      <div class={cls}>
        <h3 className="text-center text-5xl z-10 p-2">{title}</h3>
        <p class="italic text-center text-lg"> Collegamento ➚ </p>
      </div>
    </a>
  );
}

// PACKETS CARD ================================================

export function PacketsCard3({ title, color, description }) {

  var bgClass ="";
  switch (color) {
    case "pack1":
      bgClass = " bg-orange-300";
      break;
    case "pack2":
      bgClass = " bg-blue-300";
      break;
    case "pack3":
      bgClass = " bg-purple-300";
      break;
  }

  return (
    <div class={"z-0 h-fit rounded-3xl text-neutral-800 "+
    "text-center mx-5 transition-all hover:scale-110"+
    bgClass}>
      <h2 class="relative w-full text-4xl text-left text-white pb-10 pt-5 md:pt-0 md:pb-20 mt-5 ml-5">
        {title}
        <img
          src="/images/camera5.png"
          class="absolute opacity-75 top-0 right-0 md:right-5 scale-100 md:scale-150 mr-10 w-32 h-32 "
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
              src="/icons/whatsapp-icon-colored.png"
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