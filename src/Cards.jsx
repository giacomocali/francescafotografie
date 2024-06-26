import './main.css';

export function LandingCardTransparent({ header, body }) {
    return (
        <div
            className="bg-white rounded-xl bg-opacity-10 backdrop-blur-md text-white px-7 py-7"
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
        <div id="portfolio-card" class="flex justify-center items-center min-w-32 min-h-96">
            <h3 className="text-5xl text-white"> {text} </h3>
        </div>
    );
}