import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Tattoo from './domain/Tattoo';
import './index.css';

function App() {
  // Solo trabajos reales de Solo Águilas
  const tattoos = [
    new Tattoo('Tatuaje Del Diego', 'Homenaje / Black & Grey', 'tatuajes/diego.png'),
    new Tattoo('Hora De Aventura', 'Full Color / Neo-Tradicional', 'tatuajes/adventure.png'),
    new Tattoo('Marca Tenebrosa', 'Harry Potter / Blackwork', 'tatuajes/marca-tenebrosa.png'),
    new Tattoo('Rosa', 'Color / Blackwork', 'tatuajes/rosa.png'),
    new Tattoo('Frases', 'Fine Line / Ohana', 'tatuajes/frases.png'),
    new Tattoo('Pizza Ninja', 'New School / Sketch', 'tatuajes/pizza.png'),
    new Tattoo('Helado con Cuchillo', 'Creative / Blackwork', 'tatuajes/helado.png'),
    new Tattoo('You Mattered', 'Neo-Tradicional / Animal Rights', 'tatuajes/animales.png'),
    new Tattoo('Nombres!', 'Fine Line / Lettering', 'tatuajes/nombres.png'),
  ];

  return (
    <div className="app-container">
      <Hero />
      <main>
        <Gallery tattoos={tattoos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
