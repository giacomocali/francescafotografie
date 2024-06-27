import './main.css';

export function LandingCardTransparent({ header, body }) {
    return (
        <div
            className="rounded-xl backdrop-blur-lg text-white px-7 py-7"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
        >
            <div className="mb-20">
                <h1 className="text-7xl"> {header} </h1>
                <p className="text-xl"> {body} </p>
            </div>
        </div>
    );
}

export function PortfolioCard({ text }) {
    return (
        <div id="portfolio-card" class="-z-0 flex justify-center items-center lg:w-96 lg:h-96 md:w-96 md:h-96 sm:w-50 sm:h-96">
            <h3 className="text-5xl text-white z-10"> {text} </h3>
        </div>
    );
}