import '../main.css';
export default function Footer2() {
    return (
        <footer
            className="text-xl urbanist bg-neutral-900 z-50 flex justify-around items-center p-10 text-white">
            <div>
                <p>Francesca Calì</p>
                Nome viale, nome città, sigla
                +00 000 000 0000
            </div>
            <div class="flex">
                <a href="https://www.instagram.com/francescacali.ph/" target='_blank' className="px-4 py-2">
                    <img src="./src/assets/images/instagram-icon.png" alt="logo instagram" class="w-6 link-transition2" />
                </a>
                <a href="https://wa.me/393883032432" target="_blank" className="px-4 py-2">
                    <img src="./src/assets/images/whatsapp-icon.png" alt="logo whatsapp" class="w-6 link-transition2" />
                </a>
            </div>
        </footer>
    );
}
