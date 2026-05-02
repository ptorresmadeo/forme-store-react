const productos = {
  todos: [
    { id: 1, nombre: 'Zip Hoodie Tartan', precio: 38500, emoji: '🧥', badge: 'NUEVO', tallas: ['S','M','L','XL'], categoria: 'him' },
    { id: 2, nombre: '6-Panel Star Cap', precio: 14000, emoji: '🧢', badge: 'SOLD OUT', tallas: ['ONE SIZE'], categoria: 'him' },
    { id: 3, nombre: 'Cargo Baggy', precio: 26900, emoji: '👖', badge: 'LAST', tallas: ['M','L'], categoria: 'him' },
    { id: 4, nombre: 'Oversized Tee', precio: 18900, emoji: '👕', badge: 'NUEVO', tallas: ['S','M','L','XL'], categoria: 'him' },
    { id: 5, nombre: 'Crop Hoodie', precio: 32000, emoji: '🧥', badge: 'NUEVO', tallas: ['XS','S','M'], categoria: 'her' },
    { id: 6, nombre: 'Mini Skirt Tartan', precio: 22000, emoji: '👗', badge: 'NUEVO', tallas: ['XS','S','M','L'], categoria: 'her' },
    { id: 7, nombre: 'Baby Tee Star', precio: 16500, emoji: '👕', badge: 'LAST', tallas: ['XS','S','M'], categoria: 'her' },
    { id: 8, nombre: 'Bucket Hat', precio: 12000, emoji: '🎩', badge: 'SOLD OUT', tallas: ['ONE SIZE'], categoria: 'her' },
  ]
};

function Catalogo({ categoria, cambiarCategoria, agregarAlCarrito }) {
  const productosFiltrados = categoria === 'todos'
    ? productos.todos
    : productos.todos.filter(p => p.categoria === categoria);

  return (
    <div>
      <section className="categorias" id="categorias" aria-label="Categorías">
        <button
          className={`cat-btn ${categoria === 'him' ? 'activo' : ''}`}
          onClick={() => cambiarCategoria('him')}
        >
          <span className="cat-label">FOR HIM</span>
        </button>
        <button
          className={`cat-btn ${categoria === 'her' ? 'activo' : ''}`}
          onClick={() => cambiarCategoria('her')}
        >
          <span className="cat-label">FOR HER</span>
        </button>
      </section>

      <section className="productos" id="productos" aria-label="Catálogo de productos">
        <div className="section-header">
          <h2>LATEST DROP</h2>
          <span>VER TODO →</span>
        </div>
        <div className="productos-grid">
          {productosFiltrados.map(p => (
            <article key={p.id} className="producto-card">
              <div className="producto-img">
                <span className={`producto-badge ${p.badge === 'SOLD OUT' ? 'sold' : ''}`}>
                  {p.badge}
                </span>
                <span>{p.emoji}</span>
              </div>
              <div className="producto-info">
                <p className="producto-nombre">{p.nombre}</p>
                <p className="producto-precio">${p.precio.toLocaleString('es-AR')}</p>
                <div className="producto-tallas">
                  {p.tallas.map(t => <span key={t} className="talla">{t}</span>)}
                </div>
                <button
                  className="btn-agregar"
                  onClick={() => agregarAlCarrito(p)}
                  disabled={p.badge === 'SOLD OUT'}
                >
                  {p.badge === 'SOLD OUT' ? 'AGOTADO' : 'AGREGAR AL CARRITO'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;