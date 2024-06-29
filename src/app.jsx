import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css'

import { Router } from 'preact-router';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Services from './pages/Services'

export function App() {
  AOS.init();
  return (
    <Router>
      <Landing path="/"/>
      <Portfolio path="/portfolio" /> 
      <Aboutme path="/about" />
      <Contact path="/contatti"/> 
      <Services path="/servizi"/>
    </Router>
  )
}