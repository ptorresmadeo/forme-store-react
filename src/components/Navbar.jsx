function Navbar({ carrito }) {
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <header className="navbar" role="banner">
      <div className="logo">
        <img src="/logo.png" alt="For Me Studios" className="logo-img" />
        <span>FOR ME <strong>STUDIOS</strong></span>
      </div>
      <nav role="navigation" aria-label="Menú principal">
        <ul>
          <li><a href="#categorias">DROP</a></li>
          <li><a href="#productos">STORE</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
          <li>
            <a href="#carrito" aria-label="Carrito de compras">
              CART ({totalItems})
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;