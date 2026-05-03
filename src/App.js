import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Loader from './components/Loader';
import TransicionCatalogo from './components/TransicionCatalogo';

function App() {
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState('todos');
  const [carrito, setCarrito] = useState([]);
  const [transicion, setTransicion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cambiarCategoria = (nuevaCategoria) => {
    setTransicion(nuevaCategoria);
    setTimeout(() => {
      setCategoria(nuevaCategoria);
      setTransicion(null);
    }, 1100);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existente = prev.find(i => i.id === producto.id);
      if (existente) {
        return prev.map(i => i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  return (
    <div className="App">
      {loading && <Loader />}
      {transicion && <TransicionCatalogo categoria={transicion} />}
      <Navbar carrito={carrito} scrolled={scrolled} />
      <Hero scrolled={scrolled} />
      <Catalogo
        categoria={categoria}
        cambiarCategoria={cambiarCategoria}
        agregarAlCarrito={agregarAlCarrito}
      />
      <Carrito carrito={carrito} />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;