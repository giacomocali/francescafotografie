import Header from "../components/Headers";
import Footer2 from "../components/Footer2";

export default function Gallery({setPhotoCategory}) {

  return (
    <div id="generic-bg">
      <Header nested={false}/>
      <section class="pt-40" id="main-section">
        <h1
          class="mb-5 text-6xl text-center text-white font-medium"
          data-aos="zoom-out"
        >
          Galleria
        </h1>
        <hr class="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-10" data-aos="fade-in"/>

        <div 
          id="photos-container" 
          data-aos="fade-in"
          data-aos-delay="200"
          >
          <GalleryStripe text={"Reportage battesimo"} 
            category={"battesimo"} 
            setCategory={setPhotoCategory}/>
          <GalleryStripe text={"Reportage compleanno"} 
            category={"compleanno"} 
            setCategory={setPhotoCategory}/>
          <GalleryStripe text={"Reportage Laurea"} 
            category={"laurea"} 
            setCategory={setPhotoCategory}/>
          <GalleryStripe text={"Reportage Ritratto"} 
            category={"ritratto"} 
            setCategory={setPhotoCategory}/>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

function GalleryStripe({ text, category, setCategory }) {
  function handleClick(event) {
    setCategory(category);
  }

  return (
    <a
      href="/gallery/photos"
      onClick={event=>handleClick(event)}
    >
      <div
        id="gallery-stripe"
        class="flex justify-center items-center 
        w-full h-64 md:h-96 lg:h-96"
      >
        <h3 className="text-5xl md:text-7xl lg:text-7xl text-white font-light"> {text} </h3>
      </div>
    </a>
  );
}
