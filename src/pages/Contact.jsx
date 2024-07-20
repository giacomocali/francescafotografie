import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import { ContactCard } from "../components/Cards";

import ClipboardJS from "clipboard";

import emailjs from "@emailjs/browser";

export default function Contact() {
  var clipboard = new ClipboardJS(".copy-btn");

  clipboard.on("success", function (e) {
    var originalContent = e.trigger.innerHTML;

    console.log("copiato");

    e.clearSelection();
    e.trigger.textContent = "Copiato!";

    setTimeout(() => {
      e.trigger.innerHTML = originalContent;
    }, 1000);
  });
  clipboard.on("error", function (e) {
    console.log("errore");
  });

  return (
    <main id="landing-bg" class="h-screen">
      <Navbar1 nested={false} />
      <section class="py-52">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div class="py-10">
            <h2
              class="mb-5 w-full text-5xl text-center font-medium"
              data-aos="zoom-out"
            >
              Contattami
            </h2>
            <hr class="h-0.5 bg-white w-80 mx-auto" />
            <div
              class="my-10 flex justify-around overflow-x-auto scroll-snap-x"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <ContactCard type={"phone"} />
              <ContactCard type={"email"} />
              <ContactCard type={"address"} />
            </div>
          </div>

          <div class="mx-20" data-aos="fade-in" data-aos-delay="400">
            <div class="py-10 default-card-bg">
              <h2 class="text-4xl text-center mb-5">Inviami un messaggio</h2>
              <p class="text-yellow-200 text-2xl text-center mb-5 italic">*Work in progress</p>
              {/* <form
                action=""
                class="grid grid-cols-2 gap-5 mx-10 text-neutral-800"
              >
                <input
                  type="text"
                  class="py-2 rounded-xl outline-yellow-400"
                  placeholder="  Nome Completo"
                  required="true"
                />
                <input
                  type="email"
                  class="py-2 rounded-xl outline-yellow-400"
                  placeholder="  Email"
                  required="true"
                />
                <input
                  type="text"
                  class="py-2 rounded-xl outline-yellow-400"
                  placeholder="  Oggetto"
                />
                <textarea
                  class="py-2 rounded-xl outline-yellow-400"
                  placeholder="  Messaggio"
                  required="true"
                ></textarea>
                <div class="bg-white py-3 text-center col-span-2 rounded-xl">
                  Captcha cloudflare qui
                </div>
                <button
                  class="rounded-xl bg-blue-600 hover:bg-blue-700 w-full text-white py-3 col-span-2"
                  type="submit"
                >
                  Invia
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </main>
  );
}
