import Header from '../components/Headers.jsx'
import Footer2 from '../components/Footer2.jsx';
import { LandingCardTransparent, LandingCard } from '../components/Cards.jsx';

export default function Landing() {
    return (
        <div id='landing-background'>
            <Header />
            <section className='flex items-center justify-center' 
            id='main-section'>
                    <LandingCard header='Francesca Calì' 
                    body='Fotografa per eventi' />
            </section>
            <Footer2 />
        </div>
    );
}


function LandingTitle({ header, body }) {
    return (
        <div className="mb-20 text-white"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"    
        >
            <h1 className="text-7xl"> {header} </h1>
            <p className="text-xl"> {body} </p>
        </div>
    );
}