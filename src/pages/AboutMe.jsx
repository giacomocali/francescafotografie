import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

function aboutMeDescription() {
  return (
    <div class="text-2xl text-wrap">
      Ciao! Sono Francesca Calì, una fotografa da Roma.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <br />
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      <br />
      ut aliquip ex ea commodo consequat.
    </div>
  );
}

function aboutMeDescriptionSmall() {
  return (
    <div class="text-xs text-wrap">
      Ciao! Sono Francesca Calì, una fotografa da Roma.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <br />
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      <br />
      ut aliquip ex ea commodo consequat.
    </div>
  );
}

// export function AboutMe() {
//   return (
//     <main id="generic-bg" class="text-white">
//       <Navbar1 nested={false} />

//       <section
//         class="pt-80 hidden md:flex justify-center items-center"
//         id="main-section"
//       >
//         <div
//           class="mx-10"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         >
//           <h1 class="text-5xl mb-3"> Chi sono: </h1>
//           <div class="flex">{aboutMeDescription()}</div>
//         </div>

//         <img
//           src="./src/assets/images/placeholder.jpg"
//           alt="foto francesca"
//           class="w-1/2 lg:w-1/3"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         />
//       </section>

//       <div class="block md:hidden my-60 mx-10">
//         <img
//           src="./src/assets/images/placeholder.jpg"
//           alt="foto francesca"
//           class="w-96 mb-10"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         />

//         <div
//         class="text-red-500"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         >
//           <h1 class="text-5xl mb-3"> Chi sono: </h1>
//           {aboutMeDescriptionSmall()}
//         </div>
//       </div>

//     </main>
//   );
// }

export default function AboutMeOld() {
  return (
    <main id="generic-bg" class="text-white">
      <Navbar1 nested={false} />

      <section
        class="pt-80 hidden md:flex justify-center items-center"
        id="main-section"
      >
        <div
          class="mx-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 class="text-5xl mb-3"> Chi sono: </h1>
          <div class="flex">{aboutMeDescription()}</div>
        </div>

        <img
          src="./src/assets/images/placeholder.jpg"
          alt="foto francesca"
          class="w-1/2 lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
        />
      </section>

      <section class="py-40 block md:hidden justify-around items-center mx-10">
        <img
          src="./src/assets/images/placeholder.jpg"
          alt="foto francesca"
          class="w-96 mb-10"
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
          <h1 class="text-5xl mb-3"> Chi sono: </h1>
          <div>{aboutMeDescription()}</div>
        </div>
      </section>

      <Footer2 />
    </main>
  );
}
