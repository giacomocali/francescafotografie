export function Footer() {
    return (
        <footer className="bg-neutral-900 flex justify-around p-10 text-white">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="flex">
                <a href="https://www.instagram.com/francescacali.ph/" target='_blank' className="px-4 py-2">
                    <img src="./src/assets/instagram-icon.png" alt="logo instagram" class="w-6 link-transition2" />
                </a>
                <a href="#" target="_blank" className="px-4 py-2">
                    <img src="./src/assets/facebook-icon.png" alt="logo facebook" class="w-6 link-transition2" />
                </a>
            </div>
        </footer>
    );
}
