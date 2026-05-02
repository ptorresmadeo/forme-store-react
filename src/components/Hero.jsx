import { useState, useEffect } from 'react';

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" aria-label="Sección principal">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className={`hero-content ${scrolled ? 'scrolled' : ''}`}>
        <div className="drop-tag">
          <span className="dot"></span>DROP 004 — LIVE NOW
        </div>
        <img src="/logo.png" alt="" className="hero-logo" aria-hidden="true" />
        <h1>FOR <span>ME</span></h1>
        <p className="hero-sub">LIMITADO · LOCAL · 2026</p>
        <div className="hero-btns">
          <a href="#categorias" className="btn-primary">VER DROP</a>
          <a href="#contacto" className="btn-ghost">CONTACTO</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;