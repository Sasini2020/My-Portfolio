import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import MoreInfo from './components/MoreInfo';
import Hero from './components/Hero';

export default function App () {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <MoreInfo />
      <Contact />
    </main>
  );
}
