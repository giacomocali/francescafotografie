import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";
import { useState } from "preact/hooks";
import emailjs from '@emailjs/browser';

export default function Contact() {
  return (
    <div id="generic-bg">
      <Navbar1 nested={false} />
      <section class="py-48" id="landing-background">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

          <div class="py-10">
            <h2 class="mb-5 w-full text-5xl text-center font-medium"
              data-aos="zoom-out"
            >
              Contattami
            </h2>
            <hr class="h-0.5 bg-white w-80 mx-auto"/>
            <ul 
              class="my-10 flex justify-around"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <ContactCard title={"Telefono"} />
              <ContactCard title={"Email"} />
              <ContactCard title={"Indirizzo"} />
            </ul>
          </div>

          <div class="mx-20" data-aos="fade-in" data-aos-delay="400">

            <div class="py-10 bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl">
              <h2 class="text-4xl text-center mb-5">Inviami un messaggio</h2>
              <form
                action=""
                class="grid grid-cols-2 gap-5 mx-10 text-neutral-800"
              >
                <input
                  type="text"
                  class="py-2 rounded-xl"
                  placeholder="  Nome Completo"
                  required="true"
                />
                <input
                  type="email"
                  class="py-2 rounded-xl"
                  placeholder="  Email"
                  required="true"
                />
                <input
                  type="text"
                  class="py-2 rounded-xl"
                  placeholder="  Oggetto"
                />
                <textarea
                  class="py-2 rounded-xl"
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

function ContactCard({ title }) {
  return (
    <li class="p-20 mx-10 bg-white bg-opacity-15 backdrop-blur-sm rounded-xl">
      <h2 class="text-2xl">{title}</h2>
    </li>
  );
}
