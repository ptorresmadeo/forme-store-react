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

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
      <Navbar carrito={carrito} />
      <Hero />
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