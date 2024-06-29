import Header from "../components/Headers"
import Footer2 from "../components/Footer2"

export default function Aboutme() {
    return <div id="portfolio-bg">
        <Header />
        <section class="pt-36" id="main-section">

           <div class="flex justify-around items-center mx-64 mt-10 text-white">

                <div data-aos="fade-up">
                    <h1 class="text-3xl mb-3"> Chi sono: </h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/>
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <img src="./src/assets/esterni12.jpg" 
                    alt="foto francesca" 
                    class="w-96" />
                </div>

            </div> 
            
        </section>
        <Footer2 />
    </div>
}
