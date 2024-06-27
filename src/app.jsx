import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css'

import { Router } from 'preact-router';

import Landing from './Landing';
import Portfolio from './Portfolio';
import Aboutme from './Aboutme';
import { Contact } from './Contact';

export function App() {
  AOS.init();
  return (
    <Router>
      <Landing path="/"/>
      <Portfolio path="/portfolio" /> 
      <Aboutme path="/about" />
      <Contact path="/contact"/>  
    </Router>
  )
}