import Navbar1 from "../components/Navbars";
import Footer2 from "../components/Footer2.jsx";
import { Link } from "../components/Links";

export default function Landing() {
  globalThis.scrollTo({ top: 0, left: 0 });
  return (
    <main id="landing-bg">
      <Navbar1 nested={false} />
      <section className="flex items-center justify-center" id="main-section">
        <LandingContent header="Francesca Calì" body="Fotografa per eventi" />
      </section>
      <Footer2 nested={false}/>
    </main>
  );
}

// function LandingTitle({ header, body }) {
//     return (
//         <div className="mb-20 text-white"
//             data-aos="fade-up"
//             data-aos-delay="300"
//             data-aos-duration="1000"
//         >
//             <h1 className="text-7xl"> {header} </h1>
//             <p className="text-xl"> {body} </p>
//         </div>
//     );
// }

function LandingContent({ header, body }) {
  return (
    <div
      className="text-white px-7 py-7"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1300"
    >
      <div className="mb-10 text-center">
        <h1 className="playwrite text-4xl md:text-5xl lg:text-7xl xl:text-7xl mb-4">
          {header}
        </h1>
        <p className="text-xl md:text-3xl lg:text-3xl mb-10"> {body} </p>
        <Link text="Pacchetti" type="standard" useAos={true} href={"/packs"} />
        <Link text="Galleria" type="standard" useAos={true} href={"/gallery"} />
      </div>
    </div>
  );
}
