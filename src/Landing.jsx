import Header from './Headers.jsx'
import { Footer } from './Footer.jsx';
import { LandingCardTransparent } from './Cards.jsx';

export default function Landing() {
    return (
        <div id='landing-background'>
            <Header />
            <section className='flex items-center' 
            id='main-section'>
                <div id='landing-card-container'>
                    <LandingCardTransparent header='Francesca Calì' 
                    body='Fotografa per eventi' />
                </div>
            </section>
            <Footer />
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