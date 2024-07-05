import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css'

import anime from "../node_modules/animejs/lib/anime.es.js";
import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import { useEffect } from 'preact/hooks';

import Landing from './pages/Landing';
import Gallery from './pages/Gallery';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Packs from './pages/Packs';
import { Photos } from './pages/Photos';

export function App() {
  AOS.init();
  const [photoCategory, setPhotoCategory] = useState(()=>{
    const localCategoryVal = localStorage.getItem("photoCategory");
    if(localCategoryVal == null) return '';

    return localCategoryVal;
  });

  useEffect(()=>{
    localStorage.setItem("photoCategory", photoCategory)
  }, [photoCategory]);

  return (
      <Router>
        <Landing path="/"/>
        <Gallery path="/gallery" setPhotoCategory={setPhotoCategory} />
        <Photos path="/gallery/photos" photoCategory={photoCategory} />
        <Aboutme path="/about" />
        <Contact path="/contatti"/> 
        <Packs path="/packs"/>
      </Router>
  )
}