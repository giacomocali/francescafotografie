import '../main.css';

export default function Header() {
    return (
        <div className="backdrop-blur-lg fixed z-10 w-full px-5 py-7 text-white text-lg"
        id='main-nav'>
            <div className="flex justify-around items-center font-light">
                <a href="/" 
                className="playwrite flex items-center p-2 text-2xl link-transition2">
                    Francesca Photography
                </a>

                <div className="text-2xl hidden sm:flex sm:items-center sm:space-x-6">
                    <a href="/gallery" className="px-4 py-2 link-transition2">Galleria</a>
                    <a href="/packs" className='px-4 py-2 link-transition2'> Pacchetti </a>
                    <a href="/about" className="px-4 py-2 link-transition2">Chi sono</a>
                    <a href="/contatti" className="px-4 py-2 link-transition2">Contatti</a>
                    <a href="https://www.instagram.com/francescacali.ph/" target='_blank'>
                        <img src="./src/assets/icons/instagram-icon.png" alt="logo instagram" class="w-6 link-transition2" />
                    </a>
                    <a href="https://wa.me/393883032432" target='_blank'>
                        <img src="./src/assets/icons/whatsapp-icon.png" alt="logo whatsapp" class="w-6 link-transition2" />
                    </a>
                </div>
            </div>
        </div>
    )
}