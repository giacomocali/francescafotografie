import Header from "./Headers"
import { PortfolioCard } from "./Cards"

export default function Portfolio() {
    return <div id="portfolio-bg">
        <Header />
        <section class="pt-36" id="landing">
            <h1 class="text-5xl text-center text-white">Lavori recenti</h1>
            <div className="grid grid-cols-4 mt-20 mx-16 gap-20">
                <PortfolioCard text={"Img1"}/>
                <PortfolioCard text={"Img2"}/>
                <PortfolioCard text={"Img3"}/>
                <PortfolioCard text={"Img4"}/>
            </div>
        </section>
    </div>
}
