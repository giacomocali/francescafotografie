import "../main.css";
export default function Footer2({ nested }) {
  var whatsappSrc = "./src/assets/icons/whatsapp-icon.png";
  var instagramSrc = "./src/assets/icons/instagram-icon.png";

  if (nested) {
    whatsappSrc = "../../src/assets/icons/whatsapp-icon.png";
    instagramSrc = "../../src/assets/icons/instagram-icon.png";
  }

  return (
    <footer class="bg-neutral-800 text-white z-50">
      <div class="text-md md:text-xl lg:text-xl xl:text-xl flex justify-around items-center px-10 pt-10">
        <div>
          <p>Francesca Calì</p>
          <p>Roma (RM) // +39 388 303 2432 </p>
        </div>
        <div class="flex">
          <a
            href="https://www.instagram.com/francesca_fotografie/"
            target="_blank"
            className="px-4 py-2"
          >
            <img
              src={instagramSrc}
              alt="logo instagram"
              class="w-20 sm:w-8 link-transition2"
            />
          </a>
          <a
            href="https://wa.me/393883032432"
            target="_blank"
            className="px-4 py-2"
          >
            <img
              src={whatsappSrc}
              alt="logo whatsapp"
              class="w-20 sm:w-8 link-transition2"
            />
          </a>
        </div>
      </div>

      <div class="text-center py-5">
        <a
          href="https://www.instagram.com/giacomodev_com"
          target="_blank"
          class="text-neutral-300 hover:text-neutral-500 active:text-blue-700"
        >
          Made with 💙 by Giacomo Calì
        </a>
      </div>
    </footer>
  );
}
