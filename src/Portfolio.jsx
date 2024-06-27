import Header from "./Headers"
import { PortfolioCard } from "./Cards"
import { Footer } from "./Footer"

export default function Portfolio() {
    return <div id="portfolio-bg">
        <Header />
        <section class="pt-36" id="main-section">

            <h1 class="text-5xl text-center text-white"
                data-aos="fade-in"
            >
                Lavori recenti</h1>

            <div 
                className="grid lg:grid-cols-4 md:grid-cols-3 mt-20 mx-16 gap-20 sm:grid-cols-2"
                data-aos="fade-in" data-aos-delay="400"
            >
                <PortfolioCard text={"Evento1"}/>
                <PortfolioCard text={"Evento2"}/>
                <PortfolioCard text={"Categoria1"}/>
                <PortfolioCard text={"Categoria2"}/>
            </div>
        </section>
        <Footer />
    </div>
}
