import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2";

export default function AboutMe() {
  return (
    <div id="generic-bg">
      <Navbar1 nested={false}/>
      <section class="pt-20" id="main-section">
        <div class="flex justify-around items-center mx-64 mt-52 text-white">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 class="text-5xl mb-3"> Chi sono: </h1>
            <div class="text-2xl">
              Ciao! Sono Francesca Calì, una fotografa da Roma. <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut <br />
              aliquip ex ea commodo consequat.
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img
              src="./src/assets/images/placeholder.jpg"
              alt="foto francesca"
              class="w-96"
            />
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}
