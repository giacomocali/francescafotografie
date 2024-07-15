import Navbar1 from "../components/Navbars";
import Footer2 from '../components/Footer2.jsx';
import { Link } from "../components/Links";

export default function Landing() {
    return (
        <div id='landing-background'>
            <Navbar1 nested={false}/>
            <section className='flex items-center justify-center' 
            id='main-section'>
                    <LandingContent header='Francesca Calì' 
                    body='Fotografa per eventi' />
            </section>
            <Footer2 />
        </div>
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
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="mb-10 text-center">
          <h1 className="playwrite text-7xl mb-4"> {header} </h1>
          <p className="text-4xl mb-10"> {body} </p>
          <Link
            text="Pacchetti"
            type="standard"
            useAos={true}
            href={"/packs"}
          />
          <Link
            text="Galleria"
            type="standard"
            useAos={true}
            href={"/gallery"}
          />
        </div>
      </div>
    );
  }
  