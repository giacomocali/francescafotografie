import Header from "../components/Headers";
import Footer2 from "../components/Footer2";

export default function Contact() {
  return (
    <div id="generic-bg">
      <Header nested={false} />
      <section class="pt-48" id="landing-background">
        <div class="grid grid-cols-2 grid-rows-1">
          <div class="py-10 flex justify-center items-center flex-wrap">
            <h2 class="mb-10 w-full text-5xl text-center font-medium">
              Contattami
            </h2>
            <ul class="my-10 flex justify-around">
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </ul>
          </div>

          <div class="mx-20">
            <div class="py-10 bg-white bg-opacity-15 backdrop-blur-md rounded-3xl">
              <h2 class="text-4xl text-center mb-5">Inviami un messaggio</h2>
              <form action="" class="grid grid-cols-2 gap-5 mx-10 text-neutral-800">
                <input type="text" class="py-2 rounded-xl" placeholder="  Nome" />
                <input type="text" class="py-2 rounded-xl" placeholder="  Email" />
                <input type="text" class="py-2 rounded-xl" placeholder="  Oggetto" />
                <textarea
                  class="py-2 rounded-xl"
                  placeholder="  Messaggio" 
                ></textarea>
                <div class="bg-white py-3 text-center col-span-2 rounded-xl">
                    Captcha cloudflare qui
                </div>
                <button
                  class="rounded-xl bg-blue-500 hover:bg-blue-700 w-full text-white py-3 col-span-2"
                  type="submit"
                >
                  Invia
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

function ContactCard() {
  return (
    <li class="p-20 mx-10 bg-white bg-opacity-15 backdrop-blur-md rounded-xl">
      Indirizzo
    </li>
  );
}
