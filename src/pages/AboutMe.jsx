import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

function aboutMeDescription() {
  return (
    <div class="text-wrap text-lg md:text-xl">
      La fotografia è sempre stata una mia grande passione e ho deciso di
      immergermici a capofitto quando ho capito che valorizzare le emozioni e i
      ricordi delle persone mi rendeva più felice e soddisfatta di qualsiasi
      altra cosa. Riuscire a immortalare la naturalezza, la spontaneità e le
      connessioni intime è quello che più mi riempie il cuore di gioia. Se
      deciderai di affidarti a me farò di tutto per rendere la tua sessione
      fotografica un’esperienza positiva, intima e soprattutto celebrativa della
      persona che sei o del legame che ti unisce alle persone che condivideranno
      quest'esperienza con te.
    </div>
  );
}

export default function AboutMeOld() {
  return (
    <main class="bg6 bg-properties text-black overflow-x-hidden">
      <Navbar1 nested={false} />

      <section
        class="py-36 hidden md:flex justify-evenly items-center"
        id="main-section"
      >
        <div class="w-1/2 lg:w-1/3 mx-10">
          <img
            src="/images/francesca2.jpg"
            alt="foto francesca"
            class="rounded-full shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          />
        </div>

        <div
          class="mx-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="w-1/2"
        >
          <h1 class="text-5xl mb-3"> Chi sono: </h1>
          <div class="text-2xl">{aboutMeDescription()}</div>
        </div>
      </section>

      <section class="py-28 block md:hidden justify-around items-center mx-10">
        <img
          src="/images/francesca2.jpg"
          alt="foto francesca"
          class="w-96 mb-10 rounded-full shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 class="text-4xl mb-3"> Chi sono: </h1>
          <div class="text-xl">{aboutMeDescription()}</div>
        </div>
      </section>

      <Footer2 />
    </main>
  );
}
