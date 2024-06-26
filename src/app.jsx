import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css'

import { Router } from 'preact-router';

import Portfolio from './Portfolio';
import Landing from './Landing';

export function App() {
  AOS.init();
  return (
    <Router>
      <Landing path="/"/>
      <Portfolio path="/portfolio" /> 
    </Router>
  )
}